import { Container, Grid, Button, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';

const Services = props => {
    const [layout, setLayout] = useState(3);
    const [drones, setDrones] = useState([]);
    const handleClick = () => {
        if (4 === layout) {
            setLayout(3);
        }
        else {
            setLayout(4);
        }
    }
    useEffect(() => {
        axios.get('https://drone-house-server-production.up.railway.app/drones?limit=8')
            .then(result => setDrones(result.data));
    }, []);
    return (
        <Container>
            <div className='text-center flex items-center flex-col mt-20'>
                <h1 className='text-5xl font-poppins text-gray-700 mb-3'>
                    We Use The Best Drones & Peripheral Devices

                </h1>
                <h6 className='text-xl w-2/3 text-gray-500'> The big standout-feature here is the 2.5 mile range. That’s more than twice the range of the X-Star Premium Drone! If you’re familiar with the Phantom 3 Pro, then you might be wondering what the Phantom 3 SE is missing.</h6>
            </div>
            <Button className='hover:border-gray-400 hover:text-gray-500' sx={{ my: 4, color: 'black', borderColor: 'black' }} variant='outlined' onClick={handleClick}> change layout {layout === 3 ? <Grid4x4Icon /> : <Grid3x3Icon />}</Button>
            <Grid container spacing={2} >
                {
                    drones.length ? drones.map(drone => <ServiceCard key={drone._id} home data={drone} layout={layout}></ServiceCard>) : [...Array(6).keys()].map(num => <Grid key={num} item xs={12} md={layout}>
                        <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%' }} height={300} />
                        <Skeleton sx={{ width: '80%' }} height={35} animation="wave" />
                        <Skeleton sx={{ width: '85%' }} height={35} animation="wave" />
                        <Skeleton sx={{ width: '25%' }} height={50} animation="wave" />
                    </Grid>)

                }
            </Grid>
        </Container >
    );
};

export default Services;