import { handleActions } from "redux-actions";
import { MATCHED_JOB_SUCCESS, MATCHED_JOB_FAILURE } from '../actions/positions';


const initialState = {
    matchedJob: [],
    error: null,
}


const Positions = handleActions({
    [MATCHED_JOB_SUCCESS]: (state, action) => ({
        ...state,
        matchedJob: [...action.payload],
    }),
    [MATCHED_JOB_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload,
    })
}, initialState);

export default Positions;