import { USER_INFO, getUserInfoSaga } from "../actions/user";
import { takeLatest } from "redux-saga/effects";

export function* userSaga() {
    yield takeLatest(USER_INFO, getUserInfoSaga);
}