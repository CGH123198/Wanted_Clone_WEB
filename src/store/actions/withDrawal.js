import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as userAPI from '../../lib/APIs/user';


export const [
    MEMBERSHIP_WITHDRAWAL,
    MEMBERSHIP_WITHDRAWAL_SUCCESS,
    MEMBERSHIP_WITHDRAWAL_FAILURE
] = createRequestActionTypes('withdrwal/MEMBERSHIP_WITHDRWAL');


export const patchMembershipWithDrawalAction = createAction(
    MEMBERSHIP_WITHDRAWAL,
    (jwt_token, userId) => ({jwt_token, userId})
)

export const patchMembershipWithDrawalSaga = createRequestSaga(MEMBERSHIP_WITHDRAWAL, userAPI.patchMembershipWithDrawal);