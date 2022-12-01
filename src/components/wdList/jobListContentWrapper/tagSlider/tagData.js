import styled from 'styled-components';
import { sizes } from '../../../../lib/styles/mediaQuery';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'; //클릭 시, query string => tag추가


const Button = styled.button`
    background: rgb(242, 251, 245);
    position: relative;
    height: 32px;
    padding: 8px 14px;
    border-radius: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    font-size: 13px;
    line-height: 16px;
    font-weight: ${ props => props.selected ? "600" : "400" };
    color: ${ props => props.selected ? "#36f" : "#333" };
    border: 1px solid ${ props => props.selected ? "#36f" : "transparent" };

    & img {
        width: 16px;
        height: 16px;
        margin-left: 5px;
    }

    @media screen and (max-width: ${sizes.narrowest}px) {
        margin-left: 20px;
    }
`;

const TagData = ({data, limit, isLimit = f => f, }) => {
    const [click, setClick] = useState(false);
    const isClicked = () => {
        
        if(limit < 3 && !click) {
            isLimit(limit + 1);
            setClick(true);
        } 
        if (click) {
            isLimit(limit - 1);
            setClick(false);
        }
    }

    return (
        <Button type="button" onClick={isClicked} selected={click}>
            {data.text}
            <img src={data.img} alt={data.text} />
        </Button>
    )
}

export default TagData;