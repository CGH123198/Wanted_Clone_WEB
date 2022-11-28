import styled from 'styled-components';
import { sizes } from '../../../lib/styles/mediaQuery';

const CategoryBtn= styled.button`
    display: inline-block;
    background-color: white;
    border: 1px solid ${ props => props.clicked ? "#36f" : "#e1e2e3" };
    color: ${ props => props.clicked ? "#36f" : "#888" };
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

const Category = ({ getIndex, category, index, clicked }) => {
    return (
        <CategoryBtn onClick={() => getIndex(index)} clicked={clicked === index}>
            <span>{category}</span>
        </CategoryBtn>
    )
}

export default Category;