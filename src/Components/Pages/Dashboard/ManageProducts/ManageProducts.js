import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../ServiceCard/ServiceCard';
const ManageProducts = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('https://enigmatic-headland-64217.herokuapp.com/drones')
            .then(res => setServices(res.data))
    }, [])
    console.log(services);
    const handleDelete = id => {
        console.log(id);
        if (window.confirm("Are you sure you want to delete")) {
            axios.delete(`https://enigmatic-headland-64217.herokuapp.com/drones/${id}`)
                .then(res => {
                    console.log(res);
                    if (res.data.deletedCount) {
                        const newServices = services.filter(data => data._id !== id);
                        setServices(newServices);
                    }
                })
        }

    }
    return (
        <div>
            <Grid container spacing={4}>
                {
                    services.map(data => <ServiceCard key={data._id} handleDelete={handleDelete} layout='4' admin data={data}></ServiceCard>)
                }
            </Grid>
        </div>
    );
};

export default ManageProducts;