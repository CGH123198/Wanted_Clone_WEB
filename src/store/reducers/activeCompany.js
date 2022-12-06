import { handleActions } from "redux-actions";
import { ACTIVE_COMPANY_SUCCESS, ACTIVE_COMPANY_FAILURE } from '../actions/activeCompany';

const initialState = {
    activeCompany: [],
    error: null
}

const ActiveCompany = handleActions({
    [ACTIVE_COMPANY_SUCCESS]: (state, action) => ({
        ...state,
        activeCompany: [...action.payload.result],
    }),
    [ACTIVE_COMPANY_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload,
    })
}, initialState);


export default ActiveCompany;