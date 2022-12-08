import { takeLatest } from 'redux-saga/effects';
import { ID_CHECK, getIdExistenceSaga } from '../actions/idExistence';

export function* IdExistenceSaga() {
    yield takeLatest(ID_CHECK, getIdExistenceSaga);
}