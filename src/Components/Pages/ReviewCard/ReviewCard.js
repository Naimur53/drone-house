
import { Avatar, Card, CardContent, Rating, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const ReviewCard = props => {
    const { img, name, comment, ratingValue, time } = props.data;
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0, py: 10, userSelect: 'none' }}>
            <CardContent sx={{ boxShadow: 2 }}>
                <div className='flex'>
                    <Avatar className='mr-4' alt="user" src={img} />
                    <div>
                        <h5 className='font-poppins text-xl'>{name}</h5>
                        <h5 className='font-poppins text-base'>{time}</h5>

                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-base'> <i className='fas fa-quote-left text-red-300 mr-2'></i>{comment}<i className='fas fa-quote-right text-red-300 ml-2'></i></h2>
                </div>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                        textAlign: 'center'
                    }}
                >
                    <Rating name="read-only" value={ratingValue} readOnly />


                </Box>
            </CardContent>


        </Card>

    );
};

export default ReviewCard;