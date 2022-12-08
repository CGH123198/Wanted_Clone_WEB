import './registerForm.scss';
import MobileInput from '../validationInput/mobileInput';
import PasswordInput from '../validationInput/passwordInput';
import { useState } from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
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

    & span {
        color:#ccc;
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

    &:disabled span {
        color: #fff;
    }
`;



const RegisterForm = ({ email, cancelAuth, getPhoneNo, getPassword, getUsername, onSubmit }) => {
    const [phoneNumEnd, setPhoneNumEnd] = useState(false);
    const [passwordEnd, setPasswordEnd] = useState(false);

    const isPhoneNumEnd = (possible) => {
        setPhoneNumEnd(possible);
    }

    const isPasswordEnd = (possible) => {
        setPasswordEnd(possible);
    }

    return (
        <div className="modal-window">
            <div className="modal-header">
                <div className="modal-header-left">
                    <button type="button" className="cancel-button" onClick={cancelAuth}><p>취소</p></button>
                </div>
                <div className="modal-header-center">
                    <p className="register-title">회원가입</p>
                </div>
                <div className="modal-header-right"></div>
            </div>
            <div className="modal-body">
                <form onSubmit={onSubmit} >
                    <div className="email-label">
                        <label htmlFor="email" className="email-label-label">이메일</label>
                    </div>
                    <input type="email" name="email" className="register-common-input" value={email} readOnly />
                    <div className="email-label">
                        <label htmlFor="username" className="email-label-label">이름</label>
                    </div>
                    <input 
                        type="text" placeholder='이름을 입력해주세요..' 
                        name="username" 
                        className="register-common-input" 
                        onChange={getUsername}
                    />
                    <div className="email-label">
                        <label htmlFor="mobile" className="email-label-label">휴대폰 번호</label>
                    </div>
                    <div>
                        <div className="select-country">
                            <input type="text" className="register-common-input" value="South Korea +82" disabled />
                        </div>
                        <MobileInput 
                            isPhoneNumEnd={isPhoneNumEnd} 
                            onChange={getPhoneNo}
                        />
                    </div>
                    <div className="email-label">
                        <label htmlFor="password" className="email-label-label">비밀번호</label>
                    </div>
                    <PasswordInput 
                        isPasswordEnd={isPasswordEnd} 
                        onChange={getPassword}
                    />
                    <hr className="register-from-divider" />
                    {
                        (phoneNumEnd && passwordEnd) ?
                        <SubmitButton type="submit" className="register-submit-button"><span>가입하기</span></SubmitButton> :
                        <SubmitButton type="submit" className="register-submit-button" disabled><span>가입하기</span></SubmitButton>
                    }
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;