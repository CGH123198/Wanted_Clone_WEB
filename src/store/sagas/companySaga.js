import { takeLatest } from 'redux-saga/effects';
import { ACTIVE_COMPANY, getActiveCompanySaga } from '../actions/activeCompany';
import { COMPANY_INFO, getCompanyInfoSaga } from '../actions/companyInfo';

export function* companySaga() {
    yield takeLatest(ACTIVE_COMPANY, getActiveCompanySaga);
    yield takeLatest(COMPANY_INFO, getCompanyInfoSaga);
}