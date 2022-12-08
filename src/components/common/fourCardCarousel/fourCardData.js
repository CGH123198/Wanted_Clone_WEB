import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../../store/actions/user';
import { requestBookMark } from '../../../store/actions/bookMark'
import { sizes } from '../../../lib/styles/mediaQuery';

const Header = styled.header`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    height: 48%;
    width: 100%;

    @media screen and (max-width: ${sizes.narrower}px) {
        height: 60%;
    }

    @media screen and (min-width: ${sizes.narrower}px) {
        max-height: 180px;
    }
`;

const BookMarkButton = styled.button`
    display: flex;
    position: relative;
    background: none;
    padding: 8px 6px;
    width: 42px;
    height: 42px;
    margin-left: auto;
    flex-direction: row;
    z-index: 1;
    border: 0;
    justify-content: flex-end;
    align-items: flex-start;

    & svg path {
        fill: ${({bookMark}) => bookMark ? "#36f !important" : "black" };
        fill-opacity: ${({bookMark}) => bookMark ? "1 !important" : "0.75" };
    }
`

const FourCardData = ({ data, user=null, auth=null }) => {
    const [bookMarked, setBookMarked] = useState(false);
    const dispatch = useDispatch();
    const { bookMark, bookMarkList } = useSelector(({ bookMark, bookMarkList }) => ({
        bookMark: bookMark.bookMark,
        bookMarkList: bookMarkList.bookMarkList,
    }))

    const isBookMarked = (e) => {
        e.preventDefault();
        if(auth) {
            dispatch(requestBookMark(auth.jwt, auth.userId, data.positionId));
            bookMarked ? 
            setBookMarked(false) :
            setBookMarked(true);
        }
    }


    useEffect(() => {
        if(bookMarkList && bookMarkList.find(elem => elem.positionId === data.positionId)) {
            setBookMarked(true);
        }
    }, [bookMark]);

    return (
        <div className="job-card">
            <Link to={`/position/${data.positionId}`}>
                {
                    <Header img={data.imgUrl ? data.imgUrl : data.positionImg }>
                        <BookMarkButton onClick={isBookMarked} bookMark={bookMarked}>
                            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fillOpacity="0.25"></path></svg>
                        </BookMarkButton>
                    </Header>
                }
                <div className="job-card-body">
                    <div className="job-card-position">
                        {data.positionName}
                    </div>
                    <div className="job-card-company">
                        {data.companyName}
                    </div>
                    <div className="job-card-location">
                        {data.location}·{data.country}
                    </div>
                    <div className="job-card-reward">
                        채용보상금 {data.reward ? data.reward : data.compensation}원
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default React.memo(FourCardData);