import { handleActions } from "redux-actions";
import { LOGIN_SUCCESS, LOGIN_FAILURE, PUSH_LOCAL_AUTH, LOGOUT } from "../actions/auth";


const initialState = {
    auth: null,
    error: null,
}


//리듀서 설정
const Auth = handleActions({
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        auth: action.payload.result,
        error: null
    }),
    [LOGIN_FAILURE]: (state, action) => ({
        ...state,
        auth: null,
        error: action.payload
    }),
    [PUSH_LOCAL_AUTH]: (state, action) => ({
        ...state,
        auth: action.payload,
        error: null,
    }),
    [LOGOUT]: (state, action) => ({
        ...state,
        auth: null,
        error: null,
    })
}, initialState);

export default Auth;