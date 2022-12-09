import { handleActions } from "redux-actions";
import { MEMBERSHIP_WITHDRAWAL_SUCCESS, MEMBERSHIP_WITHDRAWAL_FAILURE } from "../actions/withDrawal";

const initialState = {
    withDrawal: null,
    error: null,
}

const WithDrawal = handleActions({
    [MEMBERSHIP_WITHDRAWAL_SUCCESS]: (state, action) => ({
        ...state,
        withDrawal: action.payload.message,
        error: null
    }),
    [MEMBERSHIP_WITHDRAWAL_FAILURE]: (state, action) => ({
        ...state,
        withDrawal: null,
        error: action.payload
    }),

}, initialState);

export default WithDrawal;