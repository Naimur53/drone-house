import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const BottomBanner = () => {
    return (
        <Container>
            <Typography sx={{ textAlign: 'center', my: 5 }} variant='h3'>Know About us</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://cdn.dribbble.com/users/1241107/screenshots/3303072/boy-01__________________-01.jpg" alt="" />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" component="div" gutterBottom>
                        We are the best drone seller in the world
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                        Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously through software-controlled flight plans in their embedded systems, working in conjunction with onboard sensors and GPS
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        Buy Your Product now
                    </Typography>

                </Grid>

            </Grid>
        </Container>
    );
};

export default BottomBanner;