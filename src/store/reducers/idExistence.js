import { handleActions } from "redux-actions";
import { ID_CHECK_FAILURE, ID_CHECK_SUCCESS, ID_CHECK_CANCEL } from "../actions/idExistence";


const initialState = {
    isExistence: null,
    error: null,
}

const IdExistence = handleActions({
    [ID_CHECK_SUCCESS]: (state, action) => ({
        ...state,
        isExistence: action.payload
    }),
    [ID_CHECK_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
    [ID_CHECK_CANCEL]: (state, action) => ({
        ...state,
        isExistence: null,
    })
}, initialState);

export default IdExistence;