import './categorySlider.scss';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { sizes } from '../../../lib/styles/mediaQuery.js';
import Category from './category';
import styled from 'styled-components';


const CategoryModalButton = styled.button`
    background-color: ${ props => props.modal ? "#36f" : "white"};
    border: 1px solid #e1e2e3;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .05);
    min-width: 40px;
    min-height: 40px;
    padding-bottom: 7px;
    border-radius: 4px;
    margin-left: 0px;
    margin-right: 10px;
    vertical-align: middle;

    @media screen and (max-width: ${sizes.narrowest}px) {
        min-height: 30px;
        height: 35px;
    }
`;

const CategorySlider = ({ data }) => {

    
    const [openModal, setOpenModal] = useState(false);
    

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const isOpenModal = () => {
        openModal ?
        setOpenModal(false) :
        setOpenModal(true);
    }

    return (
        <div className='category-scroll'>
                <div 
                    className="swiper-button-prev slide-prev-button"
                    ref={navigationPrevRef}
                    type="button" 
                >
                    <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={2}
                slidesPerView="auto"
                loop={false}
                slidesPerGroup={4}
                allowTouchMove={false}
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
                    data.map( (data, idx) =>
                    <SwiperSlide style={{ width: "auto"}} key={idx}>
                        <Category category={data} /> 
                    </SwiperSlide>
                    )
                }
            </Swiper>
            <div 
                className="swiper-button-next slide-next-button"
                ref={navigationNextRef}
                type="button"
            >
                <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </div>
            <CategoryModalButton type="button" onClick={isOpenModal} modal={openModal} >
                <svg width="16" height="3" viewBox="0 0 16 3"><path fillRule="evenodd" clipRule="evenodd" d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z" fill="currentColor"></path></svg>
            </CategoryModalButton>
        </div>
    )
}

export default CategorySlider;