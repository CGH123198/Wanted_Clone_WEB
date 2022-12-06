import { createAction } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as IdExistenceAPI from '../../lib/APIs/auth';


export const [ID_CHECK, ID_CHECK_SUCCESS, ID_CHECK_FAILURE] = createRequestActionTypes('id_check/ID_CHECK');
export const ID_CHECK_CANCEL = 'id_check/ID_CHECK_CANCEL';

export const cancelIdCheck = createAction(
    ID_CHECK_CANCEL
)

export const getIdExistence = createAction(
    ID_CHECK,
    email_address => email_address
)

const getIdExistenceSaga = createRequestSaga(ID_CHECK, IdExistenceAPI.checkIdExists);

export function* IdExistenceSaga() {
    yield takeLatest(ID_CHECK, getIdExistenceSaga);
}