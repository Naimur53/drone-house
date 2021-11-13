import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Button, Rating, Alert } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
const AddProduct = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = serviceInfo => {
        console.log(serviceInfo);
        axios.post('https://enigmatic-headland-64217.herokuapp.com/drones', serviceInfo)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    label="Item Name"
                    {...register("name", { required: true })}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    multiline
                    rows={4}
                    label="Write about item here"
                    {...register("description", { required: true })}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    label="Add price"
                    {...register("price", { required: true })}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    label="Img"
                    placeholder='Enter item img here'
                    {...register("img", { required: true })}
                    variant="standard" />
                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Review</Button>
            </form>
        </div>
    );
};

export default AddProduct;