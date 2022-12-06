import RegisterForm from "./registerForm";
import { useDispatch } from 'react-redux';
import { cancelIdCheck } from '../../../store/actions/idExistence'

import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterFormContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cancelAuth = () => {
        dispatch(cancelIdCheck());
        navigate(`/auth/login`);
    }

    return (
        <div>
            <RegisterForm 
                email={decodeURIComponent(searchParams.get("email"))}
                cancelAuth={cancelAuth}
            />
        </div>
    )
}

export default RegisterFormContainer;