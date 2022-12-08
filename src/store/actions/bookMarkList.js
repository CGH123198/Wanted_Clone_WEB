import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as userAPI from '../../lib/APIs/user';


export const [
    GET_BOOK_MARK_LIST,
    GET_BOOK_MARK_LIST_SUCCESS,
    GET_BOOK_MARK_LIST_FAILURE
] = createRequestActionTypes('bookMark/BOOK_MARK_LIST');

export const getBookMarkList = createAction(
    GET_BOOK_MARK_LIST,
    (jwt_token, userId)=> ({jwt_token, userId})
)

export const getBookMarkListSaga = createRequestSaga(GET_BOOK_MARK_LIST, userAPI.getBookMarkInfo);