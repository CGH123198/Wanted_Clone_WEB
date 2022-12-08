import { handleActions } from "redux-actions";
import { 
    GET_EVENT_BY_TAG_ID_SUCCESS, 
    GET_EVENT_BY_TAG_ID_FAILURE,
    GET_EVENT_BY_TAG_ID_ADDED_SUCCESS,
    GET_EVENT_BY_TAG_ID_ADDED_FAILURE
 } from "../actions/event";

const initialState = {
    event: [],
    error: null,
}


const Event = handleActions({
    [GET_EVENT_BY_TAG_ID_SUCCESS]: (state, action) => ({
        ...state,
        event: action.payload,
        error: null,
    }),
    [GET_EVENT_BY_TAG_ID_FAILURE]: (state, action) => ({
        ...state,
        event: null,
        error: action.payload
    }),
    [GET_EVENT_BY_TAG_ID_ADDED_SUCCESS]: (state, action) => ({
        ...state,
        event: [...state.event, ...action.payload],
        error: null,
    }),
    [GET_EVENT_BY_TAG_ID_ADDED_FAILURE]: (state, action) => ({
        ...state,
        event: null,
        error: action.payload
    })
}, initialState)

export default Event;