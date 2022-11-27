import './carouselStyle.scss';
import MediaQuery from 'react-responsive';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { sizes } from '../../../lib/styles/mediaQuery.js';


//추후에 page경로 따라 이미지와, text교체(location.pathname)
const CarouselComponent = () => {

    return (
        <div className='carousel-box'>
            <Swiper
                className="swiper-color"
                modules={[Navigation, Autoplay,]}
                spaceBetween={35}
                slidesPerView={1.3}
                slidesPerGroup={1}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 5000 }}
                navigation
                style={{ maxWidth: "1350px", overflow: "visible" }}
            >
                <SwiperSlide>
                    <div className="content-box" >
                        <div className="image-box">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1894%2Fa5f6eeca.jpg&amp;w=1060&amp;q=100" alt="글로벌 회사들의 전략과 리더십 고민"/>
                        </div>
                        <MediaQuery minWidth={sizes.narrow}>
                            <h1>AAA</h1>
                        </MediaQuery>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content-box">
                        <div className="image-box">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1895%2F82a7ee0d.thumb_1006_280.jpg&amp;w=1060&amp;q=100" alt="유니콘기업 리디, 전 직군 채용" />
                        </div>
                        <MediaQuery minWidth={sizes.narrow}>
                            <h1>AAA</h1>
                        </MediaQuery>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content-box">
                        <div className="image-box">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1842%2F356a7eb1.thumb_1006_280.jpg&amp;w=1060&amp;q=100" alt="벤처기업협회 추천기업 공동채용" />
                        </div>
                        <MediaQuery minWidth={sizes.narrow}>
                            <h1>AAA</h1>
                        </MediaQuery>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content-box">
                        <div className="image-box">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1897%2Feb6f5ccd.jpg&w=1060&q=100" alt="유니콘기업 리디, 전 직군 채용" />
                        </div>
                        <MediaQuery minWidth={sizes.narrow}>
                            <h1>AAA</h1>
                        </MediaQuery>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CarouselComponent;