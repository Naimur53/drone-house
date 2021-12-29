import { Container, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './TopBanner.css'
import { NavLink } from 'react-router-dom';
import fottage from '../../../media/pexels-marian-croitoru-5607784.mp4'

const TopBanner = () => {
    return (
        <div className='relative filter hue-rotate-180 mb-5'>
            <div className='banner-container h-screen'>
                <video autoPlay muted loop>
                    <source src={fottage} type="video/mp4" />
                </video>
            </div>
            <Container className='absolute top-0 left-0 bottom-0 right-0' sx={{ py: 5 }}>
                <Grid className='h-screen' container spacing={4}>
                    <Grid className="md:h-full h-1/2" sx={{ display: 'flex', alignItems: 'center' }} item xs={12} md={6}>
                        <Box className='text-center'>
                            <h1 className='text-4xl font-mono text-white'>World First <span className='transparent-style font-bold'>Transparent</span> drone</h1>
                            <Button component={NavLink} to='/explore' sx={{ my: 3 }} color='info' variant='contained'>Explore</Button>
                        </Box>
                    </Grid>
                    <Grid className="md:h-full h-1/2 " item xs={12} md={6}>
                        <div className="img-container h-full"></div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TopBanner;