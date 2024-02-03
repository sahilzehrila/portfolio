import React from 'react';
import '../Projects/Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Ecom from "../../image/qr-gen.jpg";
import slid from "../../image/ecom.webp";
import hoc from "../../image/marvel.jpg";
import Music from "../../image/weather.jpg";
import { theameContext } from '../../Context';
import { useContext } from 'react';

const Project = () => {
    const theme = useContext(theameContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Portfolio" id='Portfolio'>
            {/*heading */}
            <span id='textt'>Recent Projects</span>
            <span id='textt' style={{ color: darkMode ? 'white' : '' }}>Web APPs</span>

            {/*slider Section */}
            <Swiper
                spaceBetween={105}
                slidesPerView={window.innerWidth <= 480 ? 1 : 3} // Adjust slidesPerView based on screen width
                grabCursor={true}
                className='Portfolio-slider'
            >
                <SwiperSlide>
                    <a href="https://sahilzehrila.github.io/ecom/"><img src={slid} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://qr-code-generator-seven-henna.vercel.app/"><img src={Ecom} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://sahilzehrila.github.io/weather-APP/"><img src={Music} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://comics-zone-8paq.vercel.app/"><img src={hoc} alt="" /></a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Project;
