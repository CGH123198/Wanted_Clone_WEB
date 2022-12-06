import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as searchPositionAPI from '../../lib/APIs/positions'
import { takeLatest } from "redux-saga/effects";

export const [
    SEARCH_POSITION,
    SEARCH_POSITION_SUCCESS,
    SEARCH_POSITION_FAILURE,
] = createRequestActionTypes('searchPosition/SEARCH_POSITION');

export const getSearchResultPosition = createAction(
    SEARCH_POSITION,
    (jobGroupId, jobId) => ({jobGroupId, jobId})
)

const getSearchPositionSaga = createRequestSaga(SEARCH_POSITION, searchPositionAPI.searchResultPosition);

export function* searchPositionSaga() {
    yield takeLatest(SEARCH_POSITION, getSearchPositionSaga);
}