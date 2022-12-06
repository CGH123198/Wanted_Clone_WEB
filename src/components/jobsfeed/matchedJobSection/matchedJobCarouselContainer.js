import FourCardCarousel from "../../common/fourCardCarousel/fourCardCarousel"
import data from './matchedJobData.json';

import { getMatchedJob } from "../../../store/actions/matchedPositions";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MatchedJobCarouselContainer = () => {
    
    const { matchedJob, error, loading } = useSelector( ({matchedPositions, loading}) => ({
        matchedJob: matchedPositions.matchedJob,
        error: matchedPositions.error,
        loading: loading['matchedPositions/MATCHED_JOB']
    }))
    
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getMatchedJob());   
    }, [dispatch])

    return (
        <FourCardCarousel 
            data={matchedJob} 
            error={error} 
            loading={loading}
        />
    )
}

export default MatchedJobCarouselContainer;