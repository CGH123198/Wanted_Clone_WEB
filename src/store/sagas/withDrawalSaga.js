import { MEMBERSHIP_WITHDRAWAL, patchMembershipWithDrawalSaga } from "../actions/withDrawal";
import { takeLatest } from "redux-saga/effects";

export function* withdrawalSaga() {
    yield takeLatest(MEMBERSHIP_WITHDRAWAL, patchMembershipWithDrawalSaga);
}