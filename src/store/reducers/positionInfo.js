import { handleActions } from "redux-actions";
import { POSITION_INFO_FAILURE, POSITION_INFO_SUCCESS } from "../actions/positionInfo";

const initialState = {
    positionInfo: null,
    error: null,
}

const PositionInfo = handleActions({
    [POSITION_INFO_SUCCESS]: (state, action) => ({
        ...state,
        positionInfo: action.payload,
        error: null,
    }),
    [POSITION_INFO_FAILURE]: (state, action) => ({
        ...state,
        positionInfo: null,
        error: null,
    })
}, initialState)

export default PositionInfo;