import './carouselStyle.scss';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

//추후에 page경로 따라 이미지와, text교체(location.pathname)
const CarouselComponent = ({ data }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    
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
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                style={{ maxWidth: "1350px", overflow: "visible" }}
            >
                {
                    data &&
                    data.map( elem => {
                        return (
                            <SwiperSlide>
                                <div className="content-box" >
                                    <div className="image-box">
                                        <img src={elem.img} alt={elem.info[0]} />
                                    </div>
                                    <div className="banner-information">
                                        <h2>{elem.info[0]}</h2>
                                        <h3>{elem.info[1]}</h3>
                                        <hr className="divider-root" />
                                        <Link to="#" className="detail-link" >
                                            <span>바로가기</span>
                                            <span>
                                                <span >
                                                    <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
                <button type="button" className="swiper-button-prev" ref={navigationPrevRef}>
                    <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                </button>
                <button type="button" className="swiper-button-next" ref={navigationNextRef}>
                    <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                </button>
            </Swiper>
        </div>
    )
}

export default CarouselComponent;