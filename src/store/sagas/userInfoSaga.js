import { takeLatest } from "redux-saga/effects";
import { 
    patchPhoneNumSaga, patchUserNameSaga, patchPasswordSaga,
    PATCH_PHONE_NUM, PATCH_USERNAME, PATCH_PASSWORD 
} from "../actions/userInfo";


export function* userInfoSaga() {
    yield takeLatest(PATCH_PHONE_NUM, patchPhoneNumSaga);
    yield takeLatest(PATCH_USERNAME, patchUserNameSaga);
    yield takeLatest(PATCH_PASSWORD, patchPasswordSaga);
}