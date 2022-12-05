import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { sizes } from '../../../lib/styles/mediaQuery';
import { useParams, useNavigate, } from 'react-router-dom';

const CategoryBtn= styled.button`
    display: inline-block;
    background-color: white;
    border: 1px solid ${ props => props.pathCheck ? "#36f" : "#e1e2e3" };
    color: ${ props => props.pathCheck ? "#36f" : "#888" };
    font-weight: 600;
    font-size: 13px;
    box-sizing: border-box;
    height: 40px;
    padding: 0 18px;
    white-space:nowrap;
    margin: 0 5px;
    text-align: center;
    border-radius: 30px;
    
    &:hover {
        background-color: #f7f0d0;
    }

    @media screen and (max-width: ${sizes.narrowest}px) {
        max-height: 35px;
    }
`;

const Category = ({ category, }) => {
    const navigate = useNavigate();
    const tagParams = useParams();
    const [pathname, setPathname] = useState();

    const onClick = () => {
        navigate(`/${category.tagId}`);
    }

    useEffect( () => {
        if(!tagParams.tagId) {
            setPathname("0");
        } else {
            setPathname(tagParams.tagId);
        }
    }, [tagParams.tagId]);

    return (
        <CategoryBtn onClick={onClick} pathCheck={pathname === category.tagId}>
            <span>{category.tagName}</span>
        </CategoryBtn>
    )
}

export default Category;