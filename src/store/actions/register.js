import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as authAPI from '../../lib/APIs/auth';

export const [
    USER_REGISTER,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE
] = createRequestActionTypes('register/USER_REGISTER');

export const postRegisterUserAction = createAction(
    USER_REGISTER,
    (email, password, username, phoneNo) => ({email, password, username, phoneNo})
)

export const postRegisterUserSaga = createRequestSaga(
    USER_REGISTER,
    authAPI.postRegisterUser
)