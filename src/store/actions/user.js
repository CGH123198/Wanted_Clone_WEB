import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as userAPI from '../../lib/APIs/user';

export const [
    USER_INFO, USER_INFO_SUCCESS, USER_INFO_FAILURE
] = createRequestActionTypes('user/USER_INFO');

export const USER_INFO_EMPTY = 'user/USER_INFO_EMPTY';

export const makeUserInfoEmpty = createAction(
    USER_INFO_EMPTY
)


export const getUserInfo = createAction(
    USER_INFO, 
    (jwt_token, userId) => ({ jwt_token, userId })
)

export const getUserInfoSaga = createRequestSaga(USER_INFO, userAPI.getUserInfo);