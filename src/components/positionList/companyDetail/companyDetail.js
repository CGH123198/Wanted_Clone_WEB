import './companyDetail.scss';
import styled from 'styled-components';
import { sizes } from '../../../lib/styles/mediaQuery';

import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

const BookMarBtn = styled.button`
    background-color: ${ ({bookMark}) => bookMark ? "rgb(51, 102, 255)" : "white" };
`;

const CompanyDetail = ({data}) => {
    const [positionNumber, setPositionNumber] = useState(4);
    const [innerWidth, setInnerWidth] = useState();
    const [showAll, setShowAll] = useState(false);
    const [bookMark, setBookMark] = useState(false);

    const isBookMark = (e) => {
        e.preventDefault();
        bookMark ?
        setBookMark(false) :
        setBookMark(true);
    }

    const isShowAll = () => {
        if(showAll) { setShowAll(false); }
        else { 
            setShowAll(true);
            setPositionNumber(data.positions.length); 
        };
    }

    useEffect( () => {
        window.addEventListener( "resize", debounce(() => {
            setInnerWidth(window.innerWidth);
        }, 1000))
    }, []);

    useEffect( () => {
        if(innerWidth < sizes.narrowest && !showAll) {
            setPositionNumber(1);
        }
        if(innerWidth >= sizes.narrowest && !showAll) {
            setPositionNumber(4);       }
    }, [innerWidth, showAll]);
    console.log(data);
    return(
        <div className="company-detail-innerwrapper">
            <div className="tags-tag-array-list">
                <h3>태그</h3>
                <ul>
                    {
                        data &&
                        data.tag.map(elem => {
                            return (
                                <li>
                                    <Link to="#">{`#${elem}`}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="company-detail-content-column">
                <div className="company-detail-job-class">
                    <h3>채용중인 포지션</h3>
                    <div className="company-detail-job-listwrapper">
                        {
                            data &&
                            data.positions.map( (position, index) => {
                                if(index < positionNumber) {
                                    return(
                                        <Link 
                                            to={`/position/${position.positionId}`}
                                            className="job-item-link"
                                        >
                                            <h4>{position.position}</h4>
                                            <h5>채용보상금 {data.reward}원</h5>
                                            <p>상시 채용</p>
                                            <BookMarBtn className="job-item-bookmark-button" onClick={isBookMark} bookMark={bookMark}>
                                                <svg width="13" height="17" viewBox="0 0 13 17" style={{ color: "rgb(51, 102, 255)" }}><defs><path id="bookmarkIconLine" d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" xlinkHref="#bookmarkIconLine"></use></g></svg>
                                            </BookMarBtn>
                                        </Link>
                                    )
                                }
                            })
                        }
                    </div>
                    <button type="button" className="show-more-button" onClick={isShowAll}>
                        {
                            !showAll ?
                            "더 많은 포지션 보기" :
                            "접기"
                        }
                        <ArrowDown showAll={showAll} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetail;