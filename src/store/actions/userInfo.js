import { createAction } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../sagas/createRequestSaga';
import * as userAPI from '../../lib/APIs/user';

export const [
    PATCH_PHONE_NUM, PATCH_PHONE_NUM_SUCCESS, PATCH_PHONE_NUM_FAILURE
] = createRequestActionTypes('userInfo/PATCH_PHONE_NUM');

export const [
    PATCH_USERNAME, PATCH_USERNAME_SUCCESS, PATCH_USERNAME_FAILURE
] = createRequestActionTypes('userInfo/PATCH_USERNAME');

export const [
    PATCH_PASSWORD, PATCH_PASSWORD_SUCCESS, PATCH_PASSWORD_FAILURE
] = createRequestActionTypes('userInfo/PATCH_PASSWORD');

export const patchPhoneNum = createAction(
    PATCH_PHONE_NUM,
    (jwt_token, userId, phoneNo) => ({jwt_token, userId, phoneNo})
)

export const patchUsername = createAction(
    PATCH_USERNAME,
    (jwt_token, userId, userName) => ({jwt_token, userId, userName})
)

export const patchPassword = createAction(
    PATCH_PASSWORD,
    (jwt_token, userId, oldPassword, newPassword) => ({jwt_token, userId, oldPassword, newPassword})
)

export const patchPhoneNumSaga = createRequestSaga(PATCH_PHONE_NUM, userAPI.patchPhoneNo);
export const patchUserNameSaga = createRequestSaga(PATCH_USERNAME, userAPI.patchUserName);
export const patchPasswordSaga = createRequestSaga(PATCH_PASSWORD, userAPI.patchPassword);