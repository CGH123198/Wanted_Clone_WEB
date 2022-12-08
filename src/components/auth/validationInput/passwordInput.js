import Input from './input';
import { useState, useEffect } from 'react';

const PasswordInput = ({isPasswordEnd = f => f, getNewPw = f => f, onChange = f => f }) => {
    const passwordValidation = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{6,20}$/);
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState("");

    const [passwordCheckValid, setPasswordCheckValid] = useState(false);
    const [checkValue, setCheckValue] = useState("");

    const onChangeCheckValue = (e) => {
        setCheckValue(e.target.value);
    }

    const onChangeValue= (e) => {
        setValue(e.target.value);
    }

    const checkPasswordValidation = () => {
        if(!checkValue) { return; }
        return checkValue === value ? true : false;
    }

    useEffect( () => {
        if(!value) { return; } 
        else {
            setValid(passwordValidation.test(value));
        }
    }, [value, valid]);

    useEffect( () => {
        if(!checkValue) { return; }
        else {
            setPasswordCheckValid(checkPasswordValidation());
            isPasswordEnd(checkPasswordValidation());
        }
    }, [checkValue, passwordCheckValid]);

    return (
        <>
            <Input
                placeholder="비밀번호를 입력해주세요."
                validation={valid}
                value={value}
                type="password"
                onChange={onChangeValue}
            >
                올바르지 않은 비밀번호입니다.
            </Input>
            <Input
                placeholder="비밀번호를 다시 한번 입력해주세요."
                validation={passwordCheckValid}
                value={checkValue}
                type="password"
                onChange={(e) => { 
                    onChangeCheckValue(e);
                    getNewPw(e)
                    onChange(e)
                }}
            >   
                비밀번호가 서로 일치하지 않습니다.
            </Input>
            {
                passwordCheckValid ?
                <p className="password-valid-true">사용 가능한 비밀번호 입니다.</p> :
                <p className="password-guide-message">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
            }
        </>
    )
}

export default PasswordInput;