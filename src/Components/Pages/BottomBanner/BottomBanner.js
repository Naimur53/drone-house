import { Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomBanner = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img data-aos="fade-right" style={{ width: '100%' }} src="https://i.ibb.co/2NRDgnG/man.jpg" alt="" />

                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={6}>
                    <div>
                        <h2 className='text-5xl mb-5 tracking-wide font-poppins  text-gray-700'>
                            We Are Licenced Drone Pilots & Provide Best Drone In The World
                        </h2>
                        <h3 className='mb-5 text-gray-600 font-poppins text-lg'>
                            Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, a drone is a flying robot that can be remotely controlled
                        </h3>
                        <Button component={NavLink} to='/explore' className='hover:border-gray-400 hover:text-gray-500' sx={{ color: 'orange', borderColor: 'orange', '&:hover': { borderColor: 'gray' } }} variant='outlined'>Let's explore more</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BottomBanner;