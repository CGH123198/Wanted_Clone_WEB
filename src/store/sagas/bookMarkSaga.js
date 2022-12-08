import { takeLatest } from "redux-saga/effects";
import { BOOK_MARK, requestBookMarkSaga } from '../actions/bookMark'

export function* bookMarkSaga() {
    yield takeLatest(BOOK_MARK, requestBookMarkSaga);
}