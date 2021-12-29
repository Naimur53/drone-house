import { Container, Grid } from '@mui/material';
import React from 'react';
import './InterestingData.css'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import IconPro from '../../SvgIcons/IconPro';
import IconAnte from '../../SvgIcons/IconAnte';
import IconSupport from '../../SvgIcons/IconSupport';
import IconWorks from '../../SvgIcons/IconWorks';
const InterestingData = () => {
    return (
        <div data-aos="fade-up" className='interesting-wrapper mt-20 py-10'>
            <Container>
                <div className='text-center font-poppins pt-10 pb-5 mb-5'>
                    <h1 className='text-3xl text-white mb-2 '>We have most interesting client and Services over this year</h1>
                    <h2 className='text-xl text-white '>watch out our total work</h2>
                </div>
                <Grid className='pt-10 pb-20' container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <div className='text-white flex transition '>
                            <div className='rotate-animation '>
                                <IconPro className='fill-current text-4xl w-12'></IconPro>
                            </div>
                            <div className='border-white border-l pl-4 ml-4'>
                                <div>
                                    <CountUp end={784} duration={3} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span className='text-4xl ' ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                                <p>SATISFIED CLIENTS</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='text-white flex '>
                            <div className=''>
                                <IconAnte className='fill-current color-animation w-12'></IconAnte>
                            </div>
                            <div className='border-white border-l pl-4 ml-4'>
                                <div>
                                    <CountUp end={65} duration={2} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span className='text-4xl ' ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                                <p>PROJECTS DONE</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='text-white flex '>
                            <div className=' '>
                                <IconSupport className='fill-current signature text-4xl w-12'></IconSupport>
                            </div>
                            <div className='border-white border-l pl-4 ml-4'>
                                <div>
                                    <CountUp end={1300} duration={3} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span className='text-4xl ' ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                                <p>HOURS OF SUPPORT</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='text-white flex '>
                            <div className=' '>
                                <IconWorks className='fill-current transition  text-4xl w-12'></IconWorks>
                            </div>
                            <div className='border-white border-l pl-4 ml-4'>
                                <div>
                                    <CountUp end={25} duration={3} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span className='text-4xl ' ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                                <p>Workers</p>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default InterestingData;