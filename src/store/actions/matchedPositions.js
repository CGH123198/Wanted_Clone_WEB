import { createAction } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as PositionAPI from '../../lib/APIs/positions';

export const [MATCHED_JOB, MATCHED_JOB_SUCCESS, MATCHED_JOB_FAILURE] = createRequestActionTypes('matchedPosition/MATCHED_JOB');


export const getMatchedJob = createAction(
    MATCHED_JOB,
)

const getMatchedJobSaga = createRequestSaga(MATCHED_JOB, PositionAPI.fourCardMatchedJob);

export function* matchedPositionsSaga() {
    yield takeLatest(MATCHED_JOB, getMatchedJobSaga);
}