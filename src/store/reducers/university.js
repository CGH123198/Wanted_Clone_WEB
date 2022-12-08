import { handleActions } from "redux-actions";
import { SEARCH_UNIVERSITY_SUCCESS, SEARCH_UNIVERSITY_FAILURE } from "../actions/university";

const initialState = {
    search: [],
    error: null
}

const UniverSity = handleActions({
    [SEARCH_UNIVERSITY_SUCCESS]: (state, action) => ({
        ...state,
        search: [...action.payload.schools],
        error: null,
    }),
    [SEARCH_UNIVERSITY_FAILURE]: (state, action) => ({
        ...state,
        search: null,
        error: action.payload
    })
}, initialState)

export default UniverSity;