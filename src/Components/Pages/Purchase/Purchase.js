import { Container, Grid, TextField, Typography, Button, Alert } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ServiceCard from '../ServiceCard/ServiceCard';
const Purchase = () => {
    const [data, setData] = useState({});
    const [update, setUpdate] = useState(false);
    const { _id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log('from', user);
    const onSubmit = orderInfo => {
        console.log('his');
        orderInfo['img'] = data.img;
        orderInfo['itemId'] = data._id;
        orderInfo['status'] = 'Pending';
        console.log(orderInfo);
        axios.post('https://enigmatic-headland-64217.herokuapp.com/purchase', orderInfo)
            .then(res => {
                if (res.data?.insertedId) {
                    setUpdate(true);
                }
            })

    };
    useEffect(() => {
        axios.get(`https://enigmatic-headland-64217.herokuapp.com/drones/${_id}`).then(result => setData(result.data))
    }, []);
    return (
        <Container>
            {
                update && <Alert severity="success">Successfully Purchase </Alert>

            }
            <Grid sx={{ mt: 5 }} container spacing={5}>
                <Grid item sm={12} md={6}>
                    {
                        data.name && <ServiceCard data={data}></ServiceCard>
                    }
                </Grid>
                <Grid item sm={12} md={6}>
                    <Typography variant="h5" gutterBottom>Order now</Typography>
                    {data.name && <form onSubmit={handleSubmit(onSubmit)}>
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
                            label="Your Email"
                            {...register("email", { required: true })}
                            defaultValue={user.email}
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Date"
                            {...register("date", { required: true })}
                            defaultValue={new Date().toLocaleDateString()}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Address"
                            {...register("address", { required: true })}
                            autoFocus
                            variant="standard" />
                        {
                            errors.address && <Typography variant="body1" color='error'>*Address required</Typography>
                        }
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            InputProps={{
                                readOnly: true,
                            }}
                            label="Item name"
                            {...register("itemName", { required: true })}
                            defaultValue={data.name}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} disabled={update} type="submit" variant="contained">Purchase</Button>
                    </form>}
                </Grid>

            </Grid>
        </Container>
    );
};

export default Purchase;