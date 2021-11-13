
import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ReviewCard = props => {
    const { img, name, comment, ratingValue } = props.data;
    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275, height: '100%', }}>
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

        </Grid>
    );
};

export default ReviewCard;