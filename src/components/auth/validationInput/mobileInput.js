import Input from './input';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AuthButton = styled.button`
    height: 50px;
    min-height: 50px;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: #fff;
    font-weight: 700;
    color: #36f;
    margin-left: 10px;
    padding: 0px 15px;
    width: auto;
    flex: 0 0 auto !important;
    border-radius: 5px;
    border: 1px solid #e1e2e3;

    &:disabled {
        border: 1px solid #f2f4f7;
        color: #ccc;
        background-color: #f2f4f7;
        border: none;
        cursor: default;
    }
`;


const MobileInput = ({isPhoneNumEnd, onChange}) => {
    const mobileValidation = new RegExp(/^01([0|1|6|7|8|9])(\d{7,8})/)
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState("");
    const [authNum, setAuthNum] = useState(false);
    const [authNumValue, setAuthNumValue] = useState("");

    const onChangeValue= (e) => {
        setValue(e.target.value);
    }

    const onChangeAuthNum = (e) => {
        setAuthNumValue(e.target.value)
    }

    const isGetAuthNum = () => {
        setAuthNum(true);
    }

    useEffect( () => {
        if(!value) { return; } 
        else {
            setValid(mobileValidation.test(value));
            isPhoneNumEnd(mobileValidation.test(value));
        }
    }, [value, valid])

    return (
        <>
            <div className="get-authentication-number">
                <Input
                    type="text"
                    placeholder="(예시)0123456789"
                    validation={valid}
                    value={value}
                    onChange={(e) => { 
                        onChangeValue(e);
                        onChange(e);
                    }}
                >
                    올바른 전화번호를 입력해주세요.
                </Input>
                {
                    valid ?
                    <AuthButton type="button" onClick={isGetAuthNum}>인증번호받기</AuthButton> :
                    <AuthButton disabled>인증번호받기</AuthButton>
                }
            </div>
            {
                !authNum ?
                <input type="text" value="인증번호를 입력해주세요." className="register-common-input" disabled /> :
                <input type="text" value={authNumValue} onChange={onChangeAuthNum} className="register-common-input" />
            }
        </>
        
    )
}

export default MobileInput;