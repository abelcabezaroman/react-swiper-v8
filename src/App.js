import { Swiper, SwiperSlide } from 'swiper/react';

import './App.css';
import 'swiper/css';
import SlideNextButton from "./components/SlideNextButton";


function App () {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>

                <SlideNextButton/>
            </Swiper>
        </div>
    );
}

export default App;
