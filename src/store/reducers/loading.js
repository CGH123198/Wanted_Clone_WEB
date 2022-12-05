import { handleActions } from 'redux-actions';
import { LOADING_END, LOADING_START } from '../actions/loading';

const initialState = {}

const Loading = handleActions(
    {
        [LOADING_START]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [LOADING_END]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    },
    initialState
)

export default Loading;