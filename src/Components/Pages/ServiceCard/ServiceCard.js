import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
const ServiceCard = props => {
    const { name, img, description, price, _id } = props.data;
    return (
        <Grid item xs={12} md={props.layout}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }} >
                <CardMedia
                    sx={{ width: '100%' }}
                    component="img"
                    alt="green iguana"
                    image={img}
                />
                <Box sx={{ mt: 4 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                                props.home ? description?.split(' ').slice(0, 10).toString().replace(/,/g, ' ') : description
                            }
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'warning.main' }}>
                            ${price}
                        </Typography>
                    </CardContent>
                    <CardActions>

                        {
                            props.admin ? <Button onClick={() => props.handleDelete(_id)} variant='outlined' color='error'>Delete</Button> : <NavLink style={{ textDecoration: 'none', color: 'error.main' }} to={`/service/${_id}`}  >
                                <Button variant='outlined' color='info'>Purchase</Button>
                            </NavLink>
                        }
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    );
};

export default ServiceCard;