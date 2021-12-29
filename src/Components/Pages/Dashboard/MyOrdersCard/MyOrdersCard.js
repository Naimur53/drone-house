import { Card, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MyOrdersCard = props => {
    const { img, address, name, date, _id, status, quantity, isPaid } = props.data;

    return (
        <Grid item sm={12} md={6}>
            <Card sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', md: '45%' } }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '55%' } }}>
                    <CardContent >
                        <Typography className='font-poppins' component="div" variant="h5">
                            {name}
                        </Typography>
                        <Typography sx={{ mt: 1 }} className='font-poppins' variant="subtitle1" component="div">
                            Date: <span className='text-gray-500 mt-4'>{date}</span>
                        </Typography>
                        <Typography className='font-poppins' variant="subtitle1" component="div">
                            Quantity: <span className='text-gray-500 mt-4'>{quantity}</span>
                        </Typography>
                        <Typography className='font-poppins' variant="subtitle1" component="div">
                            Address: <span className='text-gray-500 mt-4'>{address}</span>
                        </Typography>
                        <Typography className='font-poppins' variant="subtitle1" component="div">
                            status: <span className='text-gray-500 '>{status}, {isPaid.amount ? 'Paid' : "unPaid"}</span>
                        </Typography>
                        {
                            !isPaid?.amount && <Button className='hover:border-gray-400   hover:text-gray-500 w-full' sx={{ mt: 2, color: 'black', border: '1px solid', borderColor: 'black' }} onClick={() => props.handleDelete(_id)} size="small" variant='outline' color="error">Cancel order</Button>
                        }
                    </CardContent>
                </Box>
            </Card>
        </Grid >
    );
};

export default MyOrdersCard;