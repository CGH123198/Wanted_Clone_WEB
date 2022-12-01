import PasswordForm from "./passwordForm";
import { useNavigate, } from 'react-router-dom';

const PasswordFormContainer = () => {
    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        navigate("/");
    }

    return(
        <PasswordForm onSubmit={onSubmit} navigate={navigate} />
    )
}

export default PasswordFormContainer;