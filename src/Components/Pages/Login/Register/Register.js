import { Container, Typography, TextField, Button, CircularProgress, Alert, Grid } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const { user, handleRegister, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    console.log(user);
    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        handleRegister(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }
    return (

        <Container>
            <Typography variant="h2" sx={{ mt: 3, textAlign: "center" }}>Register Yourself</Typography>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 5 }} item xs={12} md={6}>
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                </Grid>
                <Grid item sx={{ mt: 8, boxShadow: 1, pb: 3 }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>Register From</Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Name"
                            name="name"
                            required
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email"
                            name="email"
                            required
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Password"
                            type="password"
                            name="password"
                            required
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            required
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;