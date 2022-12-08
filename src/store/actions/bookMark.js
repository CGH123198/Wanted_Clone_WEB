import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as userAPI from '../../lib/APIs/user';

export const [
    BOOK_MARK, BOOK_MARK_SUCCESS, BOOK_MARK_FAILURE
] = createRequestActionTypes('bookMark/BOOK_MARK');


export const requestBookMark = createAction(
    BOOK_MARK,
    (jwt_token, userId, positionId) => ({jwt_token, userId, positionId})
);


export const requestBookMarkSaga = createRequestSaga(BOOK_MARK, userAPI.postBookMarkInfo);