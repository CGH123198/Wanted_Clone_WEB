import { createAction } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as authAPI from '../../lib/APIs/auth';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const loginRequest = createAction(
    LOGIN,
    (email_address, password) => ({email_address, password})
)

const loginRequestSaga = createRequestSaga(LOGIN, authAPI.loginRequest);

export function* authSaga() {
    yield takeLatest(LOGIN, loginRequestSaga);
}