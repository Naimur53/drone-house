
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, getIdToken } from "firebase/auth";
import initializeFirebase from '../Components/Pages/Login/Firebase/firebase.init';
import axios from 'axios';


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name, photoURL: 'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png' };
                saveUser(newUser);
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: 'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png'

                }).then().catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const saveUser = data => {
        axios.post('https://enigmatic-headland-64217.herokuapp.com/user', data)
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const url = location?.state?.from || '/';
                history.replace(url);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        const url = location?.state?.from || '/';
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');
                history.replace(url);

            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observing state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => setToken(idToken))

            } else {
                setUser({})
            }

            setIsLoading(false);
        });

    }, [auth])
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }
    useEffect(() => {
        axios.get(`https://enigmatic-headland-64217.herokuapp.com/user/${user.email}`)
            .then(res => {
                setAdmin(res.data.admin);
            })
    }, [user.email])

    return {
        user,
        isLoading,
        admin,
        authError,
        handleRegister,
        loginUser,
        signInWithGoogle,
        token,
        logout,
    }
}

export default useFirebase;