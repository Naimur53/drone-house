import { TextField, Typography, Button, Rating, Alert } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const AddReviews = () => {
    const [update, setUpdate] = useState(false);
    const [ratingValue, setRatingValue] = useState(0);
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = reviewInfo => {
        reviewInfo['img'] = user.photoURL;
        reviewInfo.time = new Date().toLocaleDateString()
        reviewInfo['ratingValue'] = ratingValue;
        console.log(reviewInfo);
        axios.post('https://enigmatic-headland-64217.herokuapp.com/reviews', reviewInfo)
            .then(res => {
                console.log(res);
                if (res.data?.insertedId) {
                    setUpdate(true);
                }
            })

    };
    return (
        <div>
            {
                update && <Alert severity="success">Review successfully added</Alert>

            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    label="Your Name"
                    {...register("name", { required: true })}
                    defaultValue={user.displayName}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    multiline
                    rows={4}
                    inputProps={{ maxLength: 200 }}
                    label="Write your review in 200 word here"
                    {...register("comment", { required: true })}
                    variant="standard" />
                <br />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '75%' }}>
                    <Typography sx={{ mt: 3 }} variant='h5'>Enter rating</Typography>
                    <Rating
                        sx={{ fontSize: 30, my: 3 }}
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue);
                        }}
                    />
                </Box>
                <br />
                <Button sx={{ width: '75%', m: 1 }} disabled={update} type="submit" variant="contained">Add Review</Button>
            </form>
        </div>
    );
};

export default AddReviews;