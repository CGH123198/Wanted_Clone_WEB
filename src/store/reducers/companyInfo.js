import { handleActions } from "redux-actions";
import { COMPANY_INFO_SUCCESS, COMPANY_INFO_FAILURE} from '../actions/companyInfo';


const initialState = {
    companyInfo: null,
    error: null,
}

const CompanyInfo = handleActions({
    [COMPANY_INFO_SUCCESS]: (state, action) => ({
        ...state,
        companyInfo: action.payload.result,
        error: null
    }),
    [COMPANY_INFO_FAILURE]: (state, action) => ({
        ...state,
        companyInfo: null,
        error: action.payload,
    })
}, initialState);

export default CompanyInfo;