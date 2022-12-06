import { createAction } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../sagas/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as companyAPI from '../../lib/APIs/company';

export const [
    ACTIVE_COMPANY, 
    ACTIVE_COMPANY_SUCCESS, 
    ACTIVE_COMPANY_FAILURE
] = createRequestActionTypes('activeCompany/ACTIVE_COMPANY');

export const getActiveCompany = createAction(
    ACTIVE_COMPANY,
)


const getActiveCompanySaga = createRequestSaga(ACTIVE_COMPANY, companyAPI.getActiveCompany);

export function* activeCompanySaga() {
    yield takeLatest(ACTIVE_COMPANY, getActiveCompanySaga);
}