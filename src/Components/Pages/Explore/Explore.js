import { Container, Grid, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
const Explore = props => {
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
        axios.get('https://enigmatic-headland-64217.herokuapp.com/drones')
            .then(result => setDrones(result.data));
        console.log(drones);
    }, []);
    return (
        <Container>
            <Typography sx={{ textAlign: 'center' }} variant='h2'>Our All Item Is there </Typography>
            <Button sx={{ my: 4 }} variant='outlined' onClick={handleClick}> change layout {layout === 3 ? <Grid4x4Icon /> : <Grid3x3Icon />}</Button>
            {
                props.home && <h2>yes</h2>
            }
            <Grid container spacing={2} >
                {
                    drones.map(drone => <ServiceCard key={drone._id} data={drone} layout={layout}></ServiceCard>)
                }
            </Grid>
        </Container >
    );
};

export default Explore;