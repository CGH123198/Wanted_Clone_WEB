import styled from 'styled-components';
import { sizes } from '../../../../lib/styles/mediaQuery';

import { useEffect, useState } from 'react';

import PositionListData from './positionListData'

const ArrowDown = styled.i`
    display: inline-block;
    font-size: 14px;
    margin-left: 4px;

    &::before {
        content: "V";
    }

    ${ ({showAll}) => showAll && `
            transform: rotate(180deg);
    `}
`;

const PositionList = ({data}) => {
    const [positionNumber, setPositionNumber] = useState(4);
    const [innerWidth, setInnerWidth] = useState();
    const [button, setButton] = useState(false);
    const [showAll, setShowAll] = useState(false);
    
    const isShowAll = () => {
        if(showAll) { 
            setShowAll(false); 
            innerWidth < sizes.narrowest ? setPositionNumber(1) : setPositionNumber(4);
        }
        else { 
            setShowAll(true);
            setPositionNumber(data.position.length); 
        };
    }

    useEffect(() => {
        if(data && data.position.length > positionNumber) {
            setButton(true);
        } else {
            setButton(false);
        }
    }, [positionNumber, data])

    useEffect( () => {
        window.addEventListener( "resize", () => {
            setInnerWidth(window.innerWidth);
        })
    })

    useEffect( () => {
        if(innerWidth < sizes.narrowest && !showAll) {
            setPositionNumber(1);
        }
        if(innerWidth >= sizes.narrowest && !showAll) {
            setPositionNumber(4);       
        }
    }, [innerWidth, showAll]);

    return (
        <div className="company-detail-job-class">
            <h3>채용중인 포지션</h3>
            <div className="company-detail-job-listwrapper">
                {
                    data &&
                    data.position.map( (pos, index) => {
                        if(index < positionNumber) {
                            return(
                                <PositionListData position={pos} />
                            )
                        }
                    })
                }
            </div>
            {
                button &&
                <button type="button" className="show-more-button" onClick={isShowAll}>
                {
                    !showAll ?
                    "더 많은 포지션 보기" :
                    "접기"
                }
                <ArrowDown showAll={showAll} />
            </button>
            }
        </div>
    )
}

export default PositionList;