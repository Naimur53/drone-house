import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
const Reviews = () => {
    console.log('hi from reviewz');
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://enigmatic-headland-64217.herokuapp.com/reviews')
            .then(res => setReviews(res.data));
    }, [])
    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ textAlign: 'center' }} variant='h2'>Customer Reviews</Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(data => <ReviewCard key={data._id} data={data}></ReviewCard>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;