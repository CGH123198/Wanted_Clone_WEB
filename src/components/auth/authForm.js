import styled from 'styled-components';
import './authForm.scss';
import { sizes } from '../../lib/styles/mediaQuery';

const FormBackground = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;

    &>div {
        max-width: 400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    @media screen and (max-width: ${sizes.narrowest}px) {
        &>div {
            max-width: 100%;
            width: 100%;
            height: 100vh;
        }
    }
`;

const AuthForm = ({ children }) => {
    return (
        <FormBackground>
            <div>
                <div className="modal-container">
                    {children}
                </div>
            </div>
        </FormBackground>
    )
}

export default AuthForm;