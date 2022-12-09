import RegisterForm from "./registerForm";
import { useDispatch, useSelector } from 'react-redux';
import { cancelIdCheck } from '../../../store/actions/idExistence'
import { postRegisterUserAction } from "../../../store/actions/register";

import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RegisterFormContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register } = useSelector(({register}) => ({
        register: register.register,
    }))

    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const getUsername = (e) => {
        setUsername(e.target.value);
    }

    const getPhoneNo = (e) => {
        setPhoneNo(e.target.value);
    }

    const cancelAuth = () => {
        dispatch(cancelIdCheck());
        navigate(`/auth/login`);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postRegisterUserAction(decodeURIComponent(searchParams.get("email")), password, username, phoneNo));
        alert(register.message);
        window.location.replace("/");
    }

    return (
        <div>
            <RegisterForm 
                onSubmit={onSubmit}
                email={decodeURIComponent(searchParams.get("email"))}
                cancelAuth={cancelAuth}
                getPassword={getPassword}
                getUsername={getUsername}
                getPhoneNo={getPhoneNo}
            />
        </div>
    )
}

export default RegisterFormContainer;