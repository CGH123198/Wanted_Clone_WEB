import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../../../store/actions/user';
import { requestBookMark } from '../../../../store/actions/bookMark'
import { pushLocalAuth } from '../../../../store/actions/auth';

const BookMarBtn = styled.button`
    background-color: ${ ({bookMarked}) => bookMarked ? "rgb(51, 102, 255)" : "white" };

    & svg {
        color: ${ ({bookMarked}) => bookMarked ? "white" : "rgb(51, 102, 255)" };
    }
`;

const PositionListData = ({position}) => {
    const { auth, user, bookMark } = useSelector(({auth, user, bookMark }) => ({
        auth: auth.auth,
        user: user.user,
        bookrMark: bookMark.bookMark
    }))
    const navigate = useNavigate();
    const [bookMarked, setBookMarked] = useState(false);
    const dispatch = useDispatch();

    const isBookMarked = (e) => {
        e.preventDefault();
        if(user && position) {
            bookMarked ? setBookMarked(false) : setBookMarked(true);
            dispatch(requestBookMark(auth.jwt, auth.userId, position.positionId));
        } else {
            navigate('/auth/login')
        }
    }

    useEffect( () => {
        if(user && position) {
            setBookMarked(user.bookmarkPositionId.find(elem => elem.positionId === position.positionId))
        }
        
    }, [bookMark, position, user])

    useEffect( () => {
        if(auth && !user) {
            dispatch(getUserInfo(auth.jwt, auth.userId));
        }
    }, [auth, user])


    useEffect( () => {
        if(localStorage.getItem("auth") && !auth) {
            const localAuth = JSON.parse(localStorage.getItem("auth"));
            dispatch(pushLocalAuth(localAuth));
        }
    }, [auth]);

  
    return (
        <Link 
            to={`/position/${position.positionId}`}
            className="job-item-link"
        >
            <h4>{position.positionName}</h4>
            <h5>채용보상금 {position.Compensation}원</h5>
            <p>상시 채용</p>
            <BookMarBtn className="job-item-bookmark-button" onClick={isBookMarked} bookMarked={bookMarked}>
                <svg width="13" height="17" viewBox="0 0 13 17" ><defs><path id="bookmarkIconLine" d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" xlinkHref="#bookmarkIconLine"></use></g></svg>
            </BookMarBtn>
        </Link>
    )
}

export default PositionListData;