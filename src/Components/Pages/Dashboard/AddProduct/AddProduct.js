import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';
import ServiceCard from '../../ServiceCard/ServiceCard';
const AddProduct = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const data = {
        img: watch('img'),
        name: watch('name'),
        description: watch('description'),
        price: watch('price'),
    }
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
            <Typography sx={{ textAlign: 'center', mb: 10 }} variant="h2">Add service with live preview</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ServiceCard data={data}></ServiceCard>

                </Grid>
                <Grid item xs={12} md={6}>
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
                            type='number'
                            {...register("price", { required: true })}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Img"
                            placeholder='Enter item img here'
                            {...register("img", { required: true })}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Product</Button>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default AddProduct;