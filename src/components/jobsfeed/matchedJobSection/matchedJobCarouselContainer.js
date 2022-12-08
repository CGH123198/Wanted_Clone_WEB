import FourCardCarousel from "../../common/fourCardCarousel/fourCardCarousel"

import { getMatchedJob } from "../../../store/actions/matchedPositions";
import { getUserInfo } from '../../../store/actions/user';
import { getBookMarkList } from "../../../store/actions/bookMarkList";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MatchedJobCarouselContainer = () => {
    
    const { 
        matchedJob, error, loading, user, auth, bookMark,  
    } = useSelector( ({matchedPositions, loading, user, auth, bookMark}) => ({
        matchedJob: matchedPositions.matchedJob,
        error: matchedPositions.error,
        loading: loading['matchedPositions/MATCHED_JOB'],
        user: user.user,
        auth: auth.auth,
        bookMark: bookMark.bookMark,
    }))
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getMatchedJob());  
        if(auth && !user) {
            getUserInfo(auth.jwt, auth.userId);
        }
    }, [auth, user])
    
    useEffect( () => {
        if(auth) {
            dispatch(getUserInfo((auth.jwt, auth.userId)));
        }
    }, [bookMark, auth])

    return (
        <FourCardCarousel 
            data={matchedJob} 
            error={error} 
            loading={loading}
            user={user}
            auth={auth}
        />
    )
}

export default MatchedJobCarouselContainer;