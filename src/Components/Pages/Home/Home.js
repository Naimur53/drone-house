import React, { useEffect } from 'react';
import MainNav from '../../Shared/MainNav/MainNav';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews'
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Footer from '../Footer/Footer';
import DroneUse from '../DroneUse/DroneUse';
import InterestingData from '../InterestingData/InterestingData';
import { useLocation } from 'react-router';
const Home = () => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <MainNav></MainNav>
            <TopBanner></TopBanner>
            <DroneUse></DroneUse>
            <Services></Services>
            <InterestingData></InterestingData>
            <Reviews></Reviews>
            <BottomBanner></BottomBanner>
            <Footer></Footer>

        </>
    );
};

export default Home;