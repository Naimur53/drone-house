import { Container, Grid, Button, Typography, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import { Box } from '@mui/system';

const Services = props => {
    const [layout, setLayout] = useState(4);
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
        axios.get('https://enigmatic-headland-64217.herokuapp.com/drones?limit=6')
            .then(result => setDrones(result.data));
        console.log(drones);
    }, []);
    return (
        <Container>
            <Typography sx={{ textAlign: 'center' }} variant="h3">Our Services</Typography>
            <Button sx={{ my: 4 }} variant='outlined' onClick={handleClick}> change layout {layout === 3 ? <Grid4x4Icon /> : <Grid3x3Icon />}</Button>
            <Grid container spacing={2} >
                {
                    drones.length ? drones.map(drone => <ServiceCard key={drone._id} home data={drone} layout={layout}></ServiceCard>) : [...Array(6).keys()].map(num => <Grid item xs={12} md={layout}>
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