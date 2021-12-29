import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import './ServiceCard.css'
const ServiceCard = props => {
    const { name, img, description, price, _id } = props.data;
    return (
        <Grid data-aos="fade-up" item xs={12} md={props.layout}>
            <Card className='card-main-wrap' sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                <div className='relative '>
                    <CardMedia
                        sx={{ width: '100%', }}
                        component="img"
                        alt="Product img"
                        image={img}
                    />
                    <div className="absolute card-style top-0 left-0 bottom-0 right-0 z-10"></div>


                </div>
                <Box sx={{ mt: 4 }}>
                    <CardContent className=' '>
                        <Typography className=' font-poppins' gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" className='  font-poppins'  >
                            {
                                description?.split(' ').slice(0, 10).toString().replace(/,/g, ' ')
                            }
                        </Typography>

                    </CardContent>
                    <CardActions className='z-30 relative justify-between'>
                        <Typography variant="h5" className='font-poppins'>
                            ${price}
                        </Typography>
                        {
                            props.admin ? <Button onClick={() => props.handleDelete(_id)} variant='outlined' color='error'>Delete</Button> : <NavLink style={{ textDecoration: 'none', color: 'error.main' }} to={`/service/${_id}`}  >
                                {
                                    !props.myOrder && <Button className=' hover:text-gray-500' sx={{ color: 'black', borderColor: 'black', '&:hover': { borderColor: 'gray' } }} variant='outlined' color='info'>Purchase</Button>
                                }
                            </NavLink>
                        }

                    </CardActions>
                </Box>
            </Card>
        </Grid >
    );
};

export default ServiceCard;