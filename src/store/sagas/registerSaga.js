import { USER_REGISTER, postRegisterUserSaga } from "../actions/register";
import { takeLatest } from "redux-saga/effects";


export function* registerSaga() {
    yield takeLatest(USER_REGISTER, postRegisterUserSaga);
}