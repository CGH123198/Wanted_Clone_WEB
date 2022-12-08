import { handleActions } from "redux-actions";
import { USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from "../actions/register";

const initialState = {
    register: null,
    error: null
}


const Register = handleActions({
    [USER_REGISTER_SUCCESS]: (state, action) => ({
        ...state,
        register: action.payload,
        error: null,
    }),
    [USER_REGISTER_FAILURE]: (state, action) => ({
        ...state,
        register: null,
        error: action.payload
    }),
}, initialState)

export default Register;