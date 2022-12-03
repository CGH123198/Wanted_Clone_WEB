import styled from 'styled-components';
import './filterInWdList.scss';
import { sizes } from '../../../../lib/styles/mediaQuery';
import TagSliderContainer from '../tagSlider/tagSliderContainer';
import { useState, useEffect } from 'react';

const FilterWrap = styled.div`
    top: 50px;
    margin-bottom: 5px;
    padding-top: 10px;

    @media (max-width: ${sizes.narrowest}px) {
        top: 110px !important;
        width: 100%;
        padding-bottom: 10px;
    }

    @media (max-width: ${sizes.narrower}px) {
        ${({ scrollPosition }) => (scrollPosition > 79) && `
            position: fixed;
            left: 0;
            right: 0;
            top: 55px;
            border-bottom: 1px solid #36f;
            background: #fff;
            z-index: 2;
            padding: 20px 0 0!important;
        `}
    }

    @media (min-width: ${sizes.narrower}px) {
        ${({ scrollPosition }) => (scrollPosition > 180) && `
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            border-bottom: 1px solid #36f;
            background: #fff;
            z-index: 2;
            padding: 20px 0 0!important;
        `}
    }
`;

const FilterInWdList = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect( () => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return (
        <FilterWrap scrollPosition={scrollPosition}>
            <hr className="joblist-content-divider joblist-content-divier-length-limit" />
            <TagSliderContainer scrollPosition={scrollPosition} />
        </FilterWrap>
    )
}

export default FilterInWdList;