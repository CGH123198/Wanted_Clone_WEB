import AuthForm from '../../components/auth/authForm';
import { Outlet } from 'react-router-dom';



const AuthPage = () => {
    return (
        <AuthForm>
            <Outlet />
        </AuthForm>
    )
}

export default AuthPage;