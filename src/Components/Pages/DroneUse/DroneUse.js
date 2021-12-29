import { Container, Grid } from '@mui/material';
import React from 'react';
import icon1 from '../../../media/icons/i-1.svg'
import icon2 from '../../../media/icons/i-2.svg'
import icon3 from '../../../media/icons/i-3.svg'
import icon4 from '../../../media/icons/i-4.svg'
const DroneUse = () => {
    return (
        <div data-aos="fade-up" className='mt-24 mb-32'>
            <Container>
                <div className='text-center flex items-center flex-col my-20'>
                    <h1 className='text-5xl font-poppins text-gray-700 mb-3'>
                        Drones Use Cutting Edge Technologies &
                        Products To Get The Best Results
                    </h1>
                    <h6 className='text-xl w-1/2 text-gray-500'> If you want a drone for shooting 4K videos on a budget,
                        the next one was built just for you.</h6>
                </div>
                {/* img description area */}
                <Grid container spacing={2} >
                    <Grid item xs={12} md={3} >
                        <div className='text-right mb-10'>
                            <div >
                                <h6 className='inline-block mr-3'>AERIAL PHOTOGRAPHY </h6>
                                <img className='w-9 inline-block mb-3' src={icon1} alt="" />
                            </div>
                            <div >
                                <em  >A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks.</em>
                            </div>
                        </div>
                        <div className='text-right'>
                            <div >
                                <h6 className='inline-block mr-3'>RESOLUTION</h6>
                                <img className='w-9 inline-block mb-3' src={icon2} alt="" />
                            </div>
                            <div >
                                <em className='font-italic'>These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.

                                </em>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.ibb.co/cgyc1c9/inner-product-04-640x384-removebg-preview.png" alt="" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='  mb-10'>
                            <div >
                                <img className='w-9 inline-block mb-3' src={icon3} alt="" />
                                <h6 className='inline-block ml-3'>PROPELLERS </h6>
                            </div>
                            <div >
                                <em  >Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.</em>
                            </div>
                        </div>
                        <div className=' '>
                            <div >
                                <img className='w-9 inline-block mb-3' src={icon4} alt="" />
                                <h6 className='inline-block ml-3'>AERIAL PHOTOGRAPHY </h6>
                            </div>
                            <div >
                                <em>Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition</em>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Container>


        </div>
    );
};

export default DroneUse;