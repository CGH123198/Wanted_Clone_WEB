import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sizes } from '../../../lib/styles/mediaQuery';

const Header = styled.header`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    height: 70%;
    width: 100%;
`;


const CardBodyImg = styled.img`
    background-image: url(${props => props.img});
    width: 42px;
    height: 42px;
    flex-grow: 0;
    flex-shrink: 0;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    background-size: contain;
    background-position: 50%;
    margin-right: 12px;
    background-repeat: no-repeat;

    @media screen and (max-width: ${sizes.narrowest}px) {
        width: 36px;
        height: 36px;
        margin-right: 10px;
    }
`;

const FollowButton = styled.button`
    border: 1px solid #e1e2e3;
    padding: 12px 25.5px 11px;
    line-height: 1;
    height: 40px;
    font-size: 15px;
    color: ${ props => props.follow ? "#ccc" : "#36f" };
    background-color: ${ props => props.follow ? "#f2f4f7" : "#fff" };
    border: 1px solid ${ props => props.follow ? "none" : "#e1e2e3" };
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 0 27px;
    box-sizing: border-box;
    border-radius: 25px;
    font-weight: 700;

    &:hover {
        border: 1px solid ${ props => props.follow ? "none" : "#36f" };;
    }

    & span {
        width: 100%;
        font-size: inherit;
        font-weight: inherit;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        color: inherit;
    }

    @media screen and (max-width: ${sizes.narrowest}px) {
        height: 35px;
        font-size: 14px;
        padding: 9px 20px 8px;
    }
`;


const TwoCardData = ({ data }) => {
    const [follow, setFollow] = useState(false);

    const isFollow = () => {
        follow ?
        setFollow(false) :
        setFollow(true);
    }

    return (
        <div className="job-card">
            <Link to="#">
                <Header img={data.img} />  
                <div className="card-body">
                    <div className="card-body-flexbox">
                        <CardBodyImg img={data.cardImg} />
                        <div className="card-body-info">
                            <p className="card-body-info-title">{data.title}</p>
                            <p className="card-body-info-location">{data.location}</p>
                        </div>
                    </div> 
                    <FollowButton type="button" onClick={isFollow} follow={follow}>
                        <span>팔로우</span>
                    </FollowButton>   
                </div> 
            </Link>
        </div>
    )
}

export default TwoCardData;