import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import './twoCardCarousel.scss';

import TwoCardData from './twoCardData';


const TwoCardCarousel = ({data}) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    
    return (
        <>
            <Swiper
                className='swiper-container'
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    }
                }}
                modules={[Navigation,]}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={false}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
            >
            {
                data &&
                data.map(elem => {
                    return (
                        <SwiperSlide className='swiper-item'>
                            <TwoCardData data={elem} />
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
            <button type="button" className="swiper-button-prev two-card-carousel" ref={navigationPrevRef}>
                <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
            </button>
            <button type="button" className="swiper-button-next two-card-carousel" ref={navigationNextRef}>
                <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </button>
        </>
    )
}

export default TwoCardCarousel;