import { takeLatest } from "redux-saga/effects";
import { SEARCH_POSITION, getSearchPositionSaga } from '../actions/searchPosition';
import { MATCHED_JOB, getMatchedJobSaga } from '../actions/matchedPositions';
import { POSITION_INFO, getPositionInfoSaga } from "../actions/positionInfo";


export function* positionSaga() {
    yield takeLatest(SEARCH_POSITION, getSearchPositionSaga);
    yield takeLatest(MATCHED_JOB, getMatchedJobSaga);
    yield takeLatest(POSITION_INFO, getPositionInfoSaga);
}