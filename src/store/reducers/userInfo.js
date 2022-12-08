import { handleActions } from "redux-actions";
import { 
    PATCH_PHONE_NUM_SUCCESS, PATCH_PHONE_NUM_FAILURE, 
    PATCH_USERNAME_SUCCESS, PATCH_USERNAME_FAILURE,
    PATCH_PASSWORD_SUCCESS, PATCH_PASSWORD_FAILURE
} from "../actions/userInfo";


const initialState = {
    userInfo: null,
    pwIsSuccess: null,
    error: null,
}

const UserInfo = handleActions({
    [PATCH_PHONE_NUM_SUCCESS]: (state, action) => ({
        ...state,
        userInfo: action.payload.result,
        error: null,
    }),
    [PATCH_PHONE_NUM_FAILURE]: (state, action) => ({
        ...state,
        userInfo: null,
        error: action.payload,
    }),
    [PATCH_USERNAME_SUCCESS]: (state, action) => ({
        ...state,
        userInfo: action.payload.result,
        error: null,
    }),
    [PATCH_USERNAME_FAILURE]: (state, action) => ({
        ...state,
        userInfo: null,
        error: action.payload,
    }),
    [PATCH_PASSWORD_SUCCESS]: (state, action) => {
        alert(action.payload.message)
        return{
            ...state,
            pwIsSuccess: action.payload.message,
            error: null,
        }
    },
    [PATCH_PASSWORD_FAILURE]: (state, action) => ({
        ...state,
        pwIsSuccess: null,
        error: action.payload,
    }),

}, initialState);

export default UserInfo;