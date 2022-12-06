import PasswordForm from "./passwordForm";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { cancelIdCheck } from '../../../store/actions/idExistence'
import { loginRequest } from '../../../store/actions/auth';
import { useState, useEffect } from 'react';


const PasswordFormContainer = () => {
    const { auth, error } = useSelector(({auth}) => ({
        auth: auth.auth,
        error: auth.error,
    }))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const cancelAuth = () => {
        dispatch(cancelIdCheck());
        navigate(`/auth/login`);
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect( () => {
        if(auth) {
            navigate(`/`);
        }
        if(error) {
            alert(error);
        }
    }, [auth])


    const onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(loginRequest(email, password))
    }

    useEffect( () => {
        setEmail(decodeURIComponent(searchParams.get("email")));
    }, [])

    return(
        <PasswordForm onSubmit={onSubmit} cancelAuth={cancelAuth} getPassword={getPassword} auth={auth}/>
    )
}

export default PasswordFormContainer;