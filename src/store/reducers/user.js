import { USER_INFO_SUCCESS, USER_INFO_FAILURE } from "../actions/user";
import { handleActions } from "redux-actions";

const initialState = {
    user: null,
    error: null
}


const User = handleActions({
    [USER_INFO_SUCCESS]: (state, action) => ({
        ...state,
        user: action.payload.result,
        error: null,
    }),
    [USER_INFO_FAILURE]: (state, action) => ({
        ...state,
        user: null,
        error: action.payload
    })
}, initialState);


export default User;