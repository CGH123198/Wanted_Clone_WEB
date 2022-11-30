import styled from 'styled-components';
import { Link } from 'react-router-dom';
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


const TwoCardData = ({ elem }) => {
    return (
        <div className="job-card">
            <Link to="#">
                <Header img={elem.img} />  
                <div className="card-body">
                    <div className="card-body-flexbox">
                        <CardBodyImg img={elem.cardImg} />
                        <p className="card-body-info-title">{elem.title}</p>
                        <p className="card-body-info-location">{elem.location}</p>
                    </div> 
                    <button type="button" className="follow-button" >
                        <span>팔로우</span>
                    </button>   
                </div> 
            </Link>
        </div>
    )
}

export default TwoCardData;