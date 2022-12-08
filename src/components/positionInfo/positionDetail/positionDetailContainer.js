import PositionDetail from "./positionDetail"
import PositionData from '../data.json';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPositionInfo } from '../../../store/actions/positionInfo';

const PositionDetailContainer = () => {
    const { positionId } = useParams();
    const dispatch = useDispatch();
    
    const { positionInfo, error } = useSelector(({positionInfo}) => ({
        positionInfo: positionInfo.positionInfo,
        error: positionInfo.error
    }))

    useEffect(() => {
        dispatch(getPositionInfo(positionId));
    }, [positionId]);

    useEffect( () => {
        console.log(positionInfo)
    }, [positionInfo])

    return (
        <>
            {
                positionInfo &&
                <PositionDetail  data={positionInfo} />
            }
        </>
    )
}

export default PositionDetailContainer;