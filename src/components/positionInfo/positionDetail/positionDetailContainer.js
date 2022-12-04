import PositionDetail from "./positionDetail"
import PositionData from '../data.json';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PositionDetailContainer = () => {
    const [data, setData] = useState();
    const { positionId } = useParams();
    
    useEffect( () => {
        setData(PositionData.find(elem => elem.positionId === positionId));
    }, [positionId, data]);

    return (
        <>
            {
                data &&
                <PositionDetail data={data} />
            }
        </>
    )
}

export default PositionDetailContainer;