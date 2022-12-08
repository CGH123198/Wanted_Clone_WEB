import BookMarkButton from './bookMarkButton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushLocalAuth } from '../../../../store/actions/auth';
import { getUserInfo } from '../../../../store/actions/user';
import { requestBookMark } from '../../../../store/actions/bookMark';

const BookMarkButtonContainer = () => {
    const [bookMark, setBookMark] = useState(false);

    const { positionId } = useParams();
    const dispatch = useDispatch();
    const { user, auth } = useSelector(({user, auth}) => ({
        user: user.user,
        auth: auth.auth
    }))

    const isBookMark = () => {
        if(user) {
            dispatch(requestBookMark(auth.jwt, auth.userId, positionId))
            bookMark ?
            setBookMark(false):
            setBookMark(true);
        }
    }

    useEffect( () => {
        if(user && user.bookmarkPositionId.find(elem => elem.positionId = positionId)) {
            setBookMark(true);
        }
    }, [user, positionId])

    useEffect(() => {
        if(!user) {
            if(!auth) {
                if(!localStorage.getItem("auth")) {
                    return;
                } else {
                    const localAuth = JSON.parse(localStorage.getItem("auth"));
                    dispatch(pushLocalAuth(localAuth));
                }
            } else {
                dispatch(getUserInfo(auth.jwt, auth.userId));
            }
        }
    }, [user, auth])


    return (
        <BookMarkButton isBookMark={isBookMark} bookMark={bookMark}/>
    )
}

export default BookMarkButtonContainer;  