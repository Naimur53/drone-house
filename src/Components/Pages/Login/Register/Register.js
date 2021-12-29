import { Container, TextField, Button, CircularProgress, Alert, Grid, Box } from '@mui/material';
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
    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        handleRegister(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }
    return (

        <Container sx={{ mt: 5 }}>
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            <Grid container spacing={4}>
                <Grid className="flex justify-center" sx={{ mt: 5 }} item xs={12} md={6}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="" />
                </Grid>
                <Grid item sx={{ mt: 8, pb: 3 }} xs={12} md={6}>
                    <Box sx={{ boxShadow: 2, pb: 3 }}>
                        <h2 className='font-poppins text-3xl text-center pt-5'>Register From</h2>
                        {!isLoading && <form className='text-center px-5' onSubmit={handleRegisterSubmit}>
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                label="Your Name"
                                name="name"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                label="Your Email"
                                name="email"
                                required
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                label="Your Password"
                                type="password"
                                name="password"
                                autoComplete="true"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                autoComplete="true"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '100%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;