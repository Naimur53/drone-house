import { Container, Grid, Button, Typography, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import ExpoBanner from '../ExpoBanner/ExpoBanner';
import { useLocation } from 'react-router';
const Explore = props => {
    const [layout, setLayout] = useState(3);
    const [drones, setDrones] = useState([]);
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const handleClick = () => {
        if (4 === layout) {
            setLayout(3);
        }
        else {
            setLayout(4);
        }
    }
    useEffect(() => {
        axios.get('https://enigmatic-headland-64217.herokuapp.com/drones')
            .then(result => setDrones(result.data));
        console.log(drones);
    }, []);
    return (
        <>
            <ExpoBanner></ExpoBanner>
            <Container className='pb-5'>
                <Button className='hover:border-gray-400 hover:text-gray-500' sx={{ my: 4, color: 'black', borderColor: 'black' }} variant='outlined' onClick={handleClick}> change layout {layout === 3 ? <Grid4x4Icon /> : <Grid3x3Icon />}</Button>
                {
                    props.home && <h2>yes</h2>
                }
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
        </>
    );
};

export default Explore;