import { SEARCH_UNIVERSITY, searchUniversitySaga } from "../actions/university";
import { debounce, takeLatest } from 'redux-saga/effects';

export function* universitySaga() {
    yield debounce(500, SEARCH_UNIVERSITY, searchUniversitySaga);
}