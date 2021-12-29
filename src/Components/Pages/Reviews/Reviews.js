import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Skeleton } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
import SwiperCore, {
    EffectCoverflow, Autoplay, Pagination, Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://enigmatic-headland-64217.herokuapp.com/reviews')
            .then(res => setReviews(res.data));
    }, [])
    SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);
    return (
        <Container maxWidth="xl" sx={{ my: 5 }}>
            <h2 className='text-5xl   text-center font-poppins text-gray-600 pt-8'>we have most interesting client </h2>
            <h4 className='text-center text-lg font-poppins text-gray-500 mt-4'>Let's hear from them</h4>
            {/* <Grid container spacing={2}>
                {
                    reviews.map(data => <ReviewCard key={data._id} data={data}></ReviewCard>)
                }
            </Grid> */}
            <Swiper

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
                breakpoints={{
                    // when window width is >= 640px
                    540: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    290: {
                        slidesPerView: 1,
                    },
                }}
            >
                {
                    reviews.length ? reviews.map(data => <SwiperSlide key={data._id}><ReviewCard data={data}></ReviewCard></SwiperSlide>) : [...Array(6).keys()].map(num => <SwiperSlide key={num}>
                        <div className='py-10'>
                            <div className='flex items-center mb-3'>
                                <Skeleton animation="wave" variant="circular" width={50} height={50} />
                                <div>
                                    <Skeleton sx={{ mb: 1, borderRadius: 2 }} animation="wave" variant="rectangular" height={25} width={200} />

                                    <Skeleton sx={{ borderRadius: 2 }} animation="wave" variant="rectangular" width={200} height={15} />
                                </div>
                            </div>
                            <div>
                                <Skeleton sx={{ mb: 1, borderRadius: 2 }} animation="wave" variant="rectangular" />
                                <Skeleton sx={{ mb: 1, borderRadius: 2 }} animation="wave" variant="rectangular" />
                                <Skeleton sx={{ mb: 1, borderRadius: 2 }} animation="wave" variant="rectangular" />
                                <Skeleton sx={{ mb: 1, borderRadius: 2 }} animation="wave" variant="rectangular" />

                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>

        </Container>
    );
};

export default Reviews;