import './categorySlider.scss';
import Category from './category';
import MediaQuery from 'react-responsive';
import { useState } from 'react';
import { sizes } from '../../../lib/styles/mediaQuery';
import styled from 'styled-components';

const CategoryListBox = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    transition: .4s;
    transition-delay: 0;
    right: ${ props =>props.slide}px;
`;

const PrevButton = styled.button`
    position: relative;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    padding: 0 10px;
    margin-left: -5px;
    margin-right: -20px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .05);
    height: 40px;
    z-index: ${ props => props.isEnd ? "-1" : "1" };
    visibility: ${ props => props.isEnd ? "hidden" : "visible" };
`;

const NextButton = styled.button`
    position: relative;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    padding: 0 10px;
    margin: 0 7px 0 ${ props => props.isEnd ? "-40px" : "-25px" };;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .05);
    z-index: ${ props => props.isEnd ? "-1" : "1" };
    visibility: ${ props => props.isEnd ? "hidden" : "visible" };
`;

const CategoryModalButton = styled.button`
    background-color: ${ props => props.modal ? "#36f" : "white"};
    border: 1px solid #e1e2e3;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .05);
    min-width: 40px;
    min-height: 40px;
    padding-bottom: 7px;
    border-radius: 4px;
    margin-left: 1px;
    vertical-align: middle;

    @media screen and (max-width: $narrowest) {
        min-height: 30px;
        height: 35px;
    }
`;

const CategorySlider = () => {
    const categories = [ 
        "IT/기술", "취업/이직", "인간관계", "리더십", "개발", "MD",
        "UX/UI", "데이터", "콘텐츠 제작", "노무", "서비스기획", "경영/전략", "디자인", "HR",
        "마케팅", "조직문화", "회사생활", "커리어고민", "라이프스타일", "브랜딩"
    ]
    const SLIDE_WIDTH = 1400;
    const [clicked, setClicked] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [controlSlide, setControlSlide] = useState(0);

    const clickPrevButton = () => {
        setControlSlide(controlSlide - SLIDE_WIDTH / 5);
    }

    const clickNextButton = () => {
        setControlSlide(controlSlide + SLIDE_WIDTH / 5);
    }
    
    const isOpenModal = () => {
        openModal ?
        setOpenModal(false) :
        setOpenModal(true);
    }

    const getIndex = key => {
       setClicked(key);
    }

    return (
        <div className="category-scroll">
            <MediaQuery minWidth={sizes.narrowest}>
                <PrevButton
                    type="button" 
                    onClick={clickPrevButton}
                    isEnd={controlSlide === 0}
                >
                    <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                </PrevButton>
            </MediaQuery>
            <div className="category-slide">
                <CategoryListBox slide={controlSlide}>
                    {
                        categories.map( (category, index) =>
                            <Category category={category} clicked={clicked} getIndex={getIndex} index={index} /> 
                        )
                    }
                </CategoryListBox>
            </div>
            <MediaQuery minWidth={sizes.narrowest}>
                <NextButton 
                    type="button"
                    onClick={clickNextButton}
                    isEnd={controlSlide === SLIDE_WIDTH}
                >
                    <svg width="18px" height="18px" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
                </NextButton>
            </MediaQuery>
            <CategoryModalButton type="button" onClick={isOpenModal} modal={openModal} >
                <svg width="16" height="3" viewBox="0 0 16 3"><path fillRule="evenodd" clipRule="evenodd" d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z" fill="currentColor"></path></svg>
            </CategoryModalButton>
        </div>
    )
}

export default CategorySlider;