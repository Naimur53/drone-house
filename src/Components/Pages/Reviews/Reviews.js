import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Skeleton, Typography } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
import SwiperCore, {
    EffectCoverflow, Autoplay, Pagination, Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
const Reviews = () => {
    console.log('hi from reviewz');
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://enigmatic-headland-64217.herokuapp.com/reviews')
            .then(res => setReviews(res.data));
    }, [])
    SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);
    return (
        <Container maxWidth="xl" sx={{ my: 5 }}>
            <Typography sx={{ textAlign: 'center', my: 10 }} variant='h2'>Customer Reviews</Typography>
            {/* <Grid container spacing={2}>
                {
                    reviews.map(data => <ReviewCard key={data._id} data={data}></ReviewCard>)
                }
            </Grid> */}
            <Swiper
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                loop={true}
                effect={'coverflow'}
                coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": false
                }}
                spaceBetween={50}
                slidesPerView={3}
                pagination={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    reviews.length ? reviews.map(data => <SwiperSlide key={data._id}><ReviewCard data={data}></ReviewCard></SwiperSlide>) : [...Array(6).keys()].map(num => <SwiperSlide key={num}><Skeleton animation="wave" variant="rectangular" sx={{ width: '100%' }} height={300} /></SwiperSlide>)
                }
            </Swiper>

        </Container>
    );
};

export default Reviews;