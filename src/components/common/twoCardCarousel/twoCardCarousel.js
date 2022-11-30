import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { sizes } from '../../../lib/styles/mediaQuery';
import './twoCardCarousel.scss';

const Header = styled.header`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    height: 70%;
    width: 100%;
`;


const CardBodyImg = styled.img`
    background-image: url(${props => props.img});
    width: 42px;
    height: 42px;
    flex-grow: 0;
    flex-shrink: 0;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    background-size: contain;
    background-position: 50%;
    margin-right: 12px;
    background-repeat: no-repeat;

    @media screen and (max-width: ${sizes.narrowest}px) {
        width: 36px;
        height: 36px;
        margin-right: 10px;
    }
`;

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
                            <div className="job-card">
                                <Link to="#">
                                    <Header img={elem.img} />  
                                    <div className="card-body">
                                        <div className="card-body-flexbox">
                                            <CardBodyImg img={elem.cardImg} />
                                            <div className="card-body-info">
                                                <p className="card-body-info-title">{elem.title}</p>
                                                <p className="card-body-info-location">{elem.location}</p>
                                            </div>
                                        </div> 
                                        <button type="button" className="follow-button" >
                                            <span>팔로우</span>
                                        </button>   
                                    </div> 
                                </Link>
                            </div>
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