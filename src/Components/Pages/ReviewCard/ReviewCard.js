
import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ReviewCard = props => {
    const { img, name, comment, ratingValue } = props.data;
    return (
        <Card sx={{ minWidth: 275, boxShadow: 3, py: 10 }}>
            <CardContent sx={{ textAlign: 'center' }}>
                <Avatar sx={{ mx: 'auto' }} alt="user" src={img} />
                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="body2">
                    {comment}
                </Typography>
            </CardContent>

            <Box
                sx={{
                    '& > legend': { mt: 2 },
                    textAlign: 'center'
                }}
            >
                <Rating name="read-only" value={ratingValue} readOnly />


            </Box>
        </Card>

    );
};

export default ReviewCard;