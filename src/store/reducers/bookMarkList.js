import { handleActions } from "redux-actions";
import { GET_BOOK_MARK_LIST_SUCCESS, GET_BOOK_MARK_LIST_FAILURE } from "../actions/bookMarkList";

const initialState = {
    bookMarkList: null,
    error: null,
}

const BookMarkList = handleActions({
    [GET_BOOK_MARK_LIST_SUCCESS]: (state, action) => ({
        ...state,
        bookMarkList: action.payload.result,
        error: null,
    }),
    [GET_BOOK_MARK_LIST_FAILURE]: (state, action) => ({
        ...state,
        bookMarkList: null,
        error: action.payload
    })
}, initialState);

export default BookMarkList;