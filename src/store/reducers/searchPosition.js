import { handleActions } from "redux-actions";
import { SEARCH_POSITION_FAILURE, SEARCH_POSITION_SUCCESS } from "../actions/searchPosition";

const initialState = {
    searchPosition: [],
    error: null,
}


const SearchPosition = handleActions({
    [SEARCH_POSITION_SUCCESS]: (state, action) => ({
        ...state,
        searchPosition: [...action.payload],
        error: null
    }),
    [SEARCH_POSITION_FAILURE]: (state, action) => ({
        ...state,
        searchPosition: [],
        error: action.payload,
    })


}, initialState);

export default SearchPosition;