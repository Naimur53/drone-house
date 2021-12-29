import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrdersCard from '../MyOrdersCard/MyOrdersCard';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`https://enigmatic-headland-64217.herokuapp.com/orders?email=${user.email}`)
            .then(result => setOrders(result.data))
    }, [user.email]);
    console.log(orders);
    const handleDelete = id => {
        console.log(id);
        if (window.confirm('Are you sure')) {
            axios.delete(`https://enigmatic-headland-64217.herokuapp.com/orders/${id}`)
                .then(res => {
                    console.log(res);
                    if (res.data?.deletedCount) {
                        const newOrders = orders.filter(data => data._id !== id);
                        console.log(newOrders);
                        setOrders(newOrders);
                    }
                })
        }

    }

    return (
        <div>
            <Typography variant="h4" sx={{ mb: 3 }}>My orders</Typography>
            <Grid sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }} container spacing={4}>
                {
                    orders.length ? orders.map(data => <MyOrdersCard key={data._id} handleDelete={handleDelete} data={data}></MyOrdersCard>) : <Grid item xs={12}><h2>please purchase Drone</h2></Grid>
                }
            </Grid>
        </div>
    );
};

export default MyOrders;