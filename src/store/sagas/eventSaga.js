import { takeLatest } from 'redux-saga/effects';
import { 
    GET_EVENT_BY_TAG_ID, 
    GET_EVENT_BY_TAG_ID_ADDED,
    getEventByTagIdSaga, 
    getEventByTagIdAddedSaga 
} from "../actions/event";

export function* eventSaga() {
    yield takeLatest(GET_EVENT_BY_TAG_ID, getEventByTagIdSaga);
    yield takeLatest(GET_EVENT_BY_TAG_ID_ADDED, getEventByTagIdAddedSaga);
}