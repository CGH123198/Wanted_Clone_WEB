import './tagSlider.scss';
import { sizes } from '../../../../lib/styles/mediaQuery';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

import TagData from './tagData';

const PrevButton = styled.div`
    width: 30px;
    height: 30px;
    left: 0;
    opacity: ${ ({sliderEnd}) => sliderEnd === 0 ? "0 !important" : "1" };
    z-index: ${ ({sliderEnd}) => sliderEnd === 0 ? "-1" : "10" };

    @media (max-width: ${sizes.narrower}px) {
        ${({ scrollPosition }) => (scrollPosition > 79) && `
            position: sticky;
            margin-top: 0px;
        `}
    }

    @media screen and (min-width: ${sizes.narrowest}px) {
        display: flex;
        top: 103px;
        bottom: 135px;
    }

    @media screen and (min-width: ${sizes.narrower}px) {
        ${({ scrollPosition }) => (scrollPosition > 172) && `
        position: sticky;
        margin-top: 0px;
        opacity: inherit;
        top: -20px;
    `}
    }
`;

const NextButton = styled.div`
    opacity: ${ ({sliderEnd}) => sliderEnd === 3 ? "0 !important" : "1" };
    z-index: ${ ({sliderEnd}) => sliderEnd === 3 ? "-1" : "10" };
    width: 30px;
    height: 30px;
    right: -2px;

    @media (max-width: ${sizes.narrower}px) {
        ${({ scrollPosition }) => (scrollPosition > 79) && `
            position: sticky;
            margin-top: 0px;
        `}
    }

    @media screen and (min-width: ${sizes.narrowest}px) {
        display: flex;
        top: 103px;
        bottom: 135px;
    }

    @media screen and (min-width: ${sizes.narrower}px) {
        ${({ scrollPosition }) => (scrollPosition > 180) && `
            position: sticky;
            margin-top: 0px;
            opacity: inherit;
            top: -20px;
        `}
    }
`;

const TagSlider = ({ data, scrollPosition }) => {
    const [selectLimit, setSelectLimit] = useState(0);
    const [sliderEnd, setSliderEnd] = useState(0);

    const isLimit = (count) => {
        setSelectLimit(count);
    }

    const clickLeft = () => {
        if(sliderEnd > 0) {
            setSliderEnd(sliderEnd - 1);
        }
    }

    const clickRight = () => {
        if(sliderEnd < 3) {
            setSliderEnd(sliderEnd + 1);
        }
    }

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);


    return (
        <section className="tag-list-slider">
            <MediaQuery maxWidth={sizes.narrowest}>
                <div className="tag-list-scroll-narrowest">
                    {
                        data.map( elem => {
                            return <TagData data={elem} isLimit={isLimit} limit={selectLimit} />
                        })
                    }
                </div>
            </MediaQuery>
            <PrevButton
                sliderEnd={sliderEnd}
                onClick={clickLeft}
                scrollPosition={scrollPosition} 
                className="swiper-button-prev slide-prev-button-wdlist"
                ref={navigationPrevRef}
                type="button" 
            >
                <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
            </PrevButton>
            <Swiper
                className="tag-slider-wdlist"
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView="auto"
                allowTouchMove={false}
                loop={false}
                slidesPerGroup={3}
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
                    data.map( elem => {
                        return (
                            <SwiperSlide>
                                <TagData data={elem} isLimit={isLimit} limit={selectLimit} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <NextButton
                sliderEnd={sliderEnd}
                onClick={clickRight}
                scrollPosition={scrollPosition} 
                className="swiper-button-next slide-next-button-wdlist"
                ref={navigationNextRef}
                type="button"
            >
                <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </NextButton>
        </section>
    )
}

export default TagSlider;