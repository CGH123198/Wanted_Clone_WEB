import { takeLatest } from "redux-saga/effects";
import { LOGIN, loginRequestSaga } from '../actions/auth';

export function* authSaga() {
    yield takeLatest(LOGIN, loginRequestSaga);
}