import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as PositionAPI from '../../lib/APIs/positions';

export const [MATCHED_JOB, MATCHED_JOB_SUCCESS, MATCHED_JOB_FAILURE] = createRequestActionTypes('position/MATCHED_JOB');


export const getMatchedJob = createAction(
    MATCHED_JOB,
)

export const getMatchedJobSaga = createRequestSaga(MATCHED_JOB, PositionAPI.fourCardMatchedJob);
