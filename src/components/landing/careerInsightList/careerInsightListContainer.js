import CareerInsightList from "./careerInsightList";
import data from '../careerInsightContent/careerInsightData.json';

import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getEventByTagIdAction } from '../../../store/actions/event';

const CareerInsightListContainer = () => {
    const { tagId } = useParams();
    const dispatch = useDispatch();
    const { event, error } = useSelector( ({event}) => ({
        event: event.event,
        error: event.error
    }))

    useEffect(() => {
        if(!tagId) {
            dispatch(getEventByTagIdAction(0))
        } else {
            tagId <=5 ? dispatch(getEventByTagIdAction(tagId)) : dispatch(getEventByTagIdAction(0))
        }
    }, [tagId]);
    return(
        <CareerInsightList careerData={event}/>
    )
}

export default CareerInsightListContainer;