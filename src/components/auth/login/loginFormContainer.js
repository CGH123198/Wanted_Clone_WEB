import LoginForm from './loginForm';
import { useNavigate, } from 'react-router-dom';
const LoginFormContainer = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/auth/login/password");
        //있는 계정 => 비밀번호 확인 => login
        //없는 계정 => 회원가입
    }

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default LoginFormContainer;