import FourCardCarousel from "../../common/fourCardCarousel/fourCardCarousel"
import data from './matchedJobData.json';

import { getMatchedJob } from "../../../store/actions/positions";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MatchedJobCarouselContainer = () => {
    
    const { matchedJob, error, loading } = useSelector( ({positions, loading}) => ({
        matchedJob: positions.matchedJob,
        error: positions.error,
        loading: loading['positions/MATCHED_JOB']
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