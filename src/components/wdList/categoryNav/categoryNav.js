import './categoryNav.scss';
import { sizes } from '../../../lib/styles/mediaQuery';
import styled from 'styled-components';

import { useState } from 'react';

const JobArrowBtn = styled.span`
    display: inline-block;
    position: relative;
    border: 1px solid ${ props => props.open ? "#767676" : "#e1e2e3" };
    border-radius: 9999px;
    background-color: #fff;
    width: 26px;
    height: 26px;
    transition: .3s;
    flex-shrink: 0;

    & svg {
        margin-top: 7px;
        transition: inherit;
        transform: rotate(${ props => props.open ? "180deg" : "0" });
    }

    @media screen and (max-width: ${sizes.narrowest}px) {
        width: 20px;
        height: 20px;

        & svg {
            margin-top: 5px;
        }
    }
`;


const CategoryNav = () => {
    const [groupOpen, setGroupOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const isGroupOpen = () => {
        groupOpen ? setGroupOpen(false) : setGroupOpen(true);
    }

    const isCategoryOpen = () => {
        categoryOpen ? setCategoryOpen(false) : setCategoryOpen(true);
    }

    return (
        <article className="category-navbar-box">
            <div className="category-navbar-body">
                <div>
                    <button className="job-group-button" type="button" onClick={isGroupOpen}>
                        <span className="job-group-title">직무</span>
                        <JobArrowBtn open={groupOpen}>
                            <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg>
                        </JobArrowBtn>
                    </button>
                </div>
                <div className="job-category-detail">
                    <button type="button" className="job-category-button" onClick={isCategoryOpen}>
                        <span className="job-category-title">
                            카테고리
                        </span>
                        <JobArrowBtn open={categoryOpen} >
                            <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg>
                        </JobArrowBtn>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CategoryNav;