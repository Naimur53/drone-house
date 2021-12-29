import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <h2 className='text-3xl my-4 font-poppins'>Login yourself</h2>
                    <form className='text-center' onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Password"
                            type="password"
                            autoComplete='true'
                            name="password"
                            onChange={handleOnChange}
                            required
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                    </form>
                    <div className="text-center">
                        <Button onClick={() => signInWithGoogle(location, history)} variant="contained">Google Sign In</Button>
                        <br />
                        {
                            isLoading && <CircularProgress></CircularProgress>
                        }
                    </div>
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;