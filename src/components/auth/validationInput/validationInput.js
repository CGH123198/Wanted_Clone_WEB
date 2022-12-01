import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from './input';

import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: #36f;
    border: none;
    margin-top: 30px;

    & .login-text {
        color: #fff;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.0056em;
        font-size: 16px;
        line-height: 24px;
    }

    &:disabled {
        color: #ccc;
        background-color: #f2f4f7;
        border: none;
        cursor: default;
    }

    &:disabled .login-text {
        color: #ccc;
    }
`;

const ValidationInput = ({ id, type}) => {
    const emailValidation = new RegExp(/[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}/);
    const [login, setLogin] = useState(false);
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState("");

    const onChangeValue = (e) => {        
        setValue(e.target.value);
    };

    const clickLogin = () => {
        //userId => 찾기 dispatch
        //찾기 결과 + userId => state에 저장
    }

    useEffect( () => {
        if(!value) { return; } 
        else {
            if(type==="email") {
                setValid(emailValidation.test(value));
                setLogin(emailValidation.test(value));
            }
            if(type==="password") {
                setValid(true);
                setLogin(true);
            }
        }
    }, [value]);

    return (
        <>
            {
                type === "email" &&
                    <>
                        <Input 
                            id={id}
                            validation={valid}
                            value={value}
                            placeholder="이메일을 입력해주세요."
                            onChange={onChangeValue}
                            type={type}
                        >
                            올바른 이메일을 입력해주세요.
                        </Input>
                        {
                            login ?
                            <Button type="submit" onClick={clickLogin}>
                                <span className="login-text">
                                    이메일로 계속하기
                                </span>
                            </Button>
                            :
                            <Button type="submit" disabled  >
                                <span className="login-text">
                                    이메일로 계속하기
                                </span>
                            </Button>
                        }
                    </>
            }
            { 
                type === "password" &&
                <>
                    <Input 
                        id={id}
                        validation={valid}
                        value={value}
                        placeholder="비밀번호를 입력해주세요."
                        onChange={onChangeValue}
                        type={type}
                    />
                    {
                        login ?
                        <Button type="submit" onClick={clickLogin}>
                            <span className="login-text">
                                다음
                            </span>
                        </Button>
                        :
                        <Button type="submit" disabled  >
                            <span className="login-text">
                                다음
                            </span>
                        </Button>
                    }
                </>
            }
        </>
    )
}

export default ValidationInput;