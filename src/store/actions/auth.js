import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as authAPI from '../../lib/APIs/auth';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
export const LOGOUT = 'auth/LOGOUT';
export const PUSH_LOCAL_AUTH = 'auth/PUSH_LOCAL_AUTH';

export const pushLocalAuth = createAction(
    PUSH_LOCAL_AUTH,
    localAuth => localAuth
)

export const logoutAction = createAction(
    LOGOUT,
)

export const loginRequest = createAction(
    LOGIN,
    (email_address, password) => ({email_address, password})
)

export const loginRequestSaga = createRequestSaga(LOGIN, authAPI.loginRequest);
