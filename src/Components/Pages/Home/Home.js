import React from 'react';
import MainNav from '../../Shared/MainNav/MainNav';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews'
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <>
            <MainNav></MainNav>
            <TopBanner></TopBanner>
            <Services></Services>
            <Reviews></Reviews>
            <BottomBanner></BottomBanner>
            <Footer></Footer>

        </>
    );
};

export default Home;