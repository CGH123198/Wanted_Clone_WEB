import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    min-height: 50px;
    padding: 0px 12px;
    outline: none;
    background-color: transparent;
    color: #333;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    border: 1px solid ${ 
        props => props.value.length > 0 && !props.valid ?
        "#fe415c" : "#e1e2e3"
    };

    &:focus {
        border: 1px solid ${
            props => props.value.length > 0 && !props.valid ?
            "#fe415c" : "#36f"
        };
    }

    &::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder {
        color: #333;
    }
`;

const P = styled.p`
    display: ${ props => props.value.length > 0 && !props.valid ? "block" : "none" };
    color: #fe415c;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0192em;
    font-size: 13px;
    line-height: 18px;
    margin: 0 0 8px 1px;
`;

const Input = ({
    validation,
    value,
    children = null, 
    ...rest
}) => {
    return (
        <div className="valid-input-container">
            <StyledInput
                autoComplete='off'
                value={value}
                valid={validation}
                {...rest}
            />
            <P 
                valid={validation} 
                value={value} 
            >{children}</P>
        </div>
    )
}

export default Input;