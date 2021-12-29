import { TextField, Button, Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = adminEmail => {
        console.log(adminEmail);
        axios.put('https://enigmatic-headland-64217.herokuapp.com/user/admin', adminEmail)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount) {
                    console.log('hi');
                    setSuccess(true);
                }
            });
    };
    return (
        <div>
            {
                success && <Alert severity="success">Successfully added admin</Alert>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    label="Enter Email"
                    {...register("email", { required: true })}
                    type='email'
                    autoFocus
                    variant="standard" />
                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Admin</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;