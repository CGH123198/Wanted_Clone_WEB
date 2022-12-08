import { handleActions } from "redux-actions";
import { BOOK_MARK_SUCCESS, BOOK_MARK_FAILURE } from '../actions/bookMark';

const initialState = {
    bookMark: null,
    error: null,
}

const BookMark = handleActions({
    [BOOK_MARK_SUCCESS]: (state, action) => ({
        ...state,
        bookMark: action.payload.result,
        error: null,
    }),
    [BOOK_MARK_FAILURE]: (state, action) => ({
        ...state,
        bookMark: null,
        error: action.payload,
    }),
}, initialState)

export default BookMark;