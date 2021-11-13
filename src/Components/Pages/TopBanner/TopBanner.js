import { Container, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBanner = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Grid container spacing={4}>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" component="div" gutterBottom>
                            World best drone are here
                        </Typography>
                        <Typography style={{ fontWeight: 200 }} variant="body1" component="div" gutterBottom>
                            Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously through software-controlled flight plans in their embedded systems, working in conjunction with onboard sensors and GPS
                        </Typography>
                        <Typography variant="small" component="div" gutterBottom>
                            Find your best drone now
                        </Typography>
                        <Button component={NavLink} to='/explore' sx={{ my: 3 }} color='info' variant='contained'>Explore</Button>
                    </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                    <img style={{ width: '100%' }} src="https://www.pngitem.com/pimgs/m/53-536256_drone-png-free-download-drone-illustration-png-transparent.png" alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default TopBanner;