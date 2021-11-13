import { Container, Grid, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

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
            <Button variant='contained' onClick={handleClick}>change layout</Button>
            <Grid container spacing={2} >
                {
                    drones.map(drone => <ServiceCard key={drone._id} home data={drone} layout={layout}></ServiceCard>)
                }
            </Grid>
        </Container >
    );
};

export default Services;