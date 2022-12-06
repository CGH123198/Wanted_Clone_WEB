import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as userAPI from '../../lib/APIs/user';

export const [
    USER_INFO, USER_INFO_SUCCESS, USER_INFO_FAILURE
] = createRequestActionTypes('user_info/USER_INFO');

export const getUserInfo = createAction(
    USER_INFO, 
    (jwt_token, userId) => ({ jwt_token, userId })
)

const getUserInfoSaga = createRequestSaga(USER_INFO, userAPI.getUserInfo);

export function* userSaga() {
    yield takeLatest(USER_INFO, getUserInfoSaga);
}