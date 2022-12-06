import LoginForm from './loginForm';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getIdExistence } from '../../../store/actions/idExistence';

const LoginFormContainer = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const { idExistence, error } = useSelector( ({idExistence}) => ({
        idExistence: idExistence.isExistence,
        error: idExistence.error
    }))

    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(getIdExistence(decodeURIComponent(searchParams.get("email"))));
    }

    return (
        <LoginForm onSubmit={onSubmit} idExistence={idExistence} email={searchParams.get("email")}/>
    )
}

export default LoginFormContainer;