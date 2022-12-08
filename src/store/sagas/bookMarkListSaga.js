import { takeLatest } from "redux-saga/effects";
import { GET_BOOK_MARK_LIST, getBookMarkListSaga } from '../actions/bookMarkList'

export function* bookMarkListSaga() {
    yield takeLatest(GET_BOOK_MARK_LIST, getBookMarkListSaga);
}