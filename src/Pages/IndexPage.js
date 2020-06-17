import React from 'react';
import Slider from '../Components/Slider/Slider';
import About from '../Components/Home/About'
import Footer from '../Components/Utilities/Footer';
import NavBar from '../Components/Utilities/NavBar';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Slider />
            <About />
            <Footer />
        </div>
    )
}

export default HomePage;
