import { Swiper, SwiperSlide } from 'swiper/react';

import './App.css';
import 'swiper/css';
import { Navigation, Pagination } from "swiper";
import SlideNextButton from "./components/SlideNextButton";


function App () {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
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
