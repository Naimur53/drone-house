import { Card, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MyOrdersCard = props => {
    const { img, address, itemName, date, _id, status } = props.data;
    return (
        <Grid item sm={12} md={6}>
            <Card sx={{ display: 'flex', height: '100%' }}>
                <CardMedia
                    component="img"
                    sx={{ width: "45%" }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {itemName}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Date:{date}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Address:{address}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            status:{status}
                        </Typography>
                        <Button onClick={() => props.handleDelete(_id)} size="small" variant='contained' color="error">Delete</Button>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
};

export default MyOrdersCard;