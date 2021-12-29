import { Container, Grid, TextField, Typography, Button, } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
const Purchase = () => {
    const [data, setData] = useState({});
    const [update, setUpdate] = useState(false);
    const [increase, setIncrease] = useState();
    const { _id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

    useEffect(() => {
        axios.get(`https://enigmatic-headland-64217.herokuapp.com/drones/${_id}`).then(result => {
            setData(result.data)
            setIncrease(data.price)
        })
    }, []);
    useEffect(() => {
        const quantity = parseInt(watch('quantity'));
        if (quantity < 0) {
            setValue('quantity', 0)
            console.log('zero');
        }
        if (quantity > 20) {
            setValue('quantity', 20)

        }
        const price = parseInt(data?.price);
        setIncrease(quantity * price)
    }, [watch('quantity')])

    const onSubmit = orderInfo => {
        orderInfo['img'] = data.img;
        orderInfo['itemId'] = data._id;
        orderInfo['name'] = data.name;
        orderInfo['status'] = 'Pending';
        orderInfo['isPaid'] = 'unPaid';
        orderInfo['total'] = increase;
        orderInfo['quantity'] = parseInt(orderInfo.quantity);

        console.log(orderInfo);

        axios.post('https://enigmatic-headland-64217.herokuapp.com/purchase', orderInfo)
            .then(res => {
                if (res.data?.insertedId) {
                    setUpdate(true);
                    notify();
                }
            }).catch(errors => console.log(errors))

    };
    const notify = () => toast.success(
        <div className='py-5'>
            <h2 className='text-green-700'>Successfully Orders</h2>
            <h2 className='text-gray-500'> For paying go to <NavLink className='underline text-blue-400' to='/dashboard/pay'>pay page</NavLink></h2>

        </div>
        , {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


    return (
        <Container maxWidth='xl' >
            <ToastContainer></ToastContainer>
            <Grid sx={{ mt: 5 }} container spacing={5}>
                <Grid item sm={12} md={8}>
                    <Grid container>
                        <Grid item sm={12} md={6} >
                            <div>
                                <img className='w-full' src={data?.img} alt="" />
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <div className='font-poppins'>
                                <h2 className='text-4xl font-semibold text-gray-700 mb-5'>{data?.name}</h2>
                                <h2 className='text-3xl text-yellow-500 underline mb-5'>${data?.price}</h2>
                                <h2 className='text-small text-gray-700'>{data?.description}</h2>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item sm={12} md={4}>
                    {data.name && <form className='shadow-lg flex flex-col justify-center items-center py-4' onSubmit={handleSubmit(onSubmit)}>
                        <Typography className='font-poppins' variant="h5" gutterBottom>Fill The From</Typography>
                        <TextField
                            sx={{ width: '75%', my: 2 }}
                            label="Your Name"
                            {...register("userName", { required: true })}
                            defaultValue={user.displayName}
                            color="warning"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mb: 2 }}
                            label="Your Email"
                            {...register("email", { required: true })}
                            defaultValue={user.email}
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            type="email"
                            color="warning"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mb: 2 }}
                            label="Date"
                            {...register("date", { required: true })}
                            defaultValue={new Date().toLocaleDateString()}
                            color="warning"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mb: 2 }}
                            label="Your Address"
                            {...register("address", { required: true })}
                            autoFocus
                            color="warning"
                            variant="standard" />
                        <div className="flex w-3/4 items-center justify-between">
                            <TextField
                                sx={{ width: '50%', mb: 2 }}
                                label="Your Quantity"
                                defaultValue='1'
                                inputProps={{ min: 1, max: 20 }}
                                type='number'
                                {...register("quantity", { required: true })}
                                autoFocus
                                color="warning"
                                variant="standard" />
                            <div>
                                <h2 className='text-lg '>  total:{increase}</h2>
                            </div>
                        </div>
                        {
                            errors.address && <Typography variant="body1" color='error'>*Address required</Typography>
                        }
                        <Button type='submit' disabled={update} className='hover:border-gray-400 hover:text-gray-500' sx={{ color: 'black', borderColor: 'black', width: '75%', m: 1 }} variant='outlined' color='info'>Add To Orders</Button>
                    </form>}
                </Grid>

            </Grid>
        </Container>
    );
};

export default Purchase;