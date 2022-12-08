import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as searchPositionAPI from '../../lib/APIs/positions'

export const [
    SEARCH_POSITION,
    SEARCH_POSITION_SUCCESS,
    SEARCH_POSITION_FAILURE,
] = createRequestActionTypes('position/SEARCH_POSITION');

export const getSearchResultPosition = createAction(
    SEARCH_POSITION,
    (jobGroupId, jobId) => ({jobGroupId, jobId})
)

export const getSearchPositionSaga = createRequestSaga(SEARCH_POSITION, searchPositionAPI.searchResultPosition);