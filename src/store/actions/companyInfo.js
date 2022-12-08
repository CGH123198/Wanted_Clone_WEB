import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as companyAPI from '../../lib/APIs/company';

export const [
    COMPANY_INFO, COMPANY_INFO_SUCCESS, COMPANY_INFO_FAILURE
] = createRequestActionTypes('company/COMPANY_INFO');

export const getCompanyInfo = createAction(
    COMPANY_INFO,
    companyId => companyId
)


export const getCompanyInfoSaga = createRequestSaga(COMPANY_INFO, companyAPI.getCompanyInfo);