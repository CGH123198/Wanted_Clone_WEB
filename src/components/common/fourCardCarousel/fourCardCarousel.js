import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import './fourCardCarousel.scss';
import MatchedJobBody from '../../jobsfeed/matchedJobSection/matchedJobBody';
import { sizes } from '../../../lib/styles/mediaQuery';

const Header = styled.header`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    height: 48%;
    width: 100%;
`;

const BookMarkBtn = styled.button`
    display: flex;
    position: relative;
    background: none;
    padding: 8px 6px;
    width: 42px;
    height: 42px;
    margin-left: auto;
    flex-direction: row;
    z-index: 1;
    border: 0;
    justify-content: flex-end;
    align-items: flex-start;
`;

const FourCardCarousel = ({data}) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    
    return (
        <>
            <Swiper
                className='swiper-container'
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    }
                }}
                modules={[Navigation,]}
                spaceBetween={30}
                slidesPerView={2}
                slidesPerGroup={2}
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
                                    <Header img={elem.img} >
                                        <BookMarkBtn>
                                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                                        </BookMarkBtn>
                                    </Header>   
                                    <MatchedJobBody data={elem} />
                                </Link>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
            <button type="button" className="swiper-button-prev four-card-carousel" ref={navigationPrevRef}>
                <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
            </button>
            <button type="button" className="swiper-button-next four-card-carousel" ref={navigationNextRef}>
                <svg viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </button>
        </>
    )
}

export default FourCardCarousel;