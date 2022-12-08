import BookMarkBody from "./bookMarkBody"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getBookMarkList } from "../../../store/actions/bookMarkList";

const BookMarkBodyContainer = () => {
    const { auth, bookMarkList, bookMarkError, user, bookMark } = useSelector(({bookMarkList, auth, user, bookMark}) => ({
        auth: auth.auth,
        user: user.user,
        bookMarkList: bookMarkList.bookMarkList,
        bookMarkError: bookMarkList.error,
        bookMark: bookMark.bookMark
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        if(auth) {
            dispatch(getBookMarkList(auth.jwt, auth.userId));
        }
    }, [auth, bookMark]);


    return (
        <>
            { bookMarkError && alert(bookMarkError) }
            <BookMarkBody bookMarkList={bookMarkList} auth={auth} user={user} />
        </>
    )
}

export default BookMarkBodyContainer;