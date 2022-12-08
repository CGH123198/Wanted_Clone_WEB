import './additionalInfoBody.scss';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { Link } from 'react-router-dom';

import ResumeRegistContainer from './resumeRegist/resumeRegistContainer';
import UnivSearchContainer from './univSearch/univeSearchContainer';

const AsideCircleImage = styled.div`
    background-image: url(${ props => props.img});
    display: inline-block;
    position: relative;
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background-size: cover;
    background-position: 50%;
`;


const AdditionalInfoBody = ({user=null}) => {
    return (
        <div className="additional-container">
            <aside className="aside-user-info-container">
                {
                    user &&
                    <>
                        <header className='aside-header'>
                            <div className="aside-circle-image">
                                <AsideCircleImage 
                                    className='aside-circle-image-image' 
                                    img={user.userImg ? user.userImg : "https://static.wanted.co.kr/images/profile_default.png"}
                                />
                            </div>
                            <button type="button" className="aside-link-button">
                                <Link to="/profile/userInfo">
                                    <div className="aside-me">
                                        <div className='aside-me-name'>{user.userName}</div>
                                        <div className='aside-me-email'>{user.email}</div>
                                        <div className='aside-me-phone'>{user.phoneNo}</div>
                                    </div>
                                </Link>
                            </button>
                            <MediaQuery minWidth={768}>
                                <Link to="/profile/userInfo" className="edit-default-info">기본정보 수정</Link>
                            </MediaQuery>
                        </header>
                        <div className="matched-status">
                            <Link to="#">
                                <span className="span-match-status">관심 있음</span>
                                <strong className="strong-match-status">{user.interestNo}</strong>
                            </Link>
                            <Link to="#">
                                <span className="span-match-status">열람</span>
                                <strong className="strong-match-status">{user.resumeOpenNo}</strong>
                            </Link>
                            <Link to="#">
                                <span className="span-match-status">받은 제안</span>
                                <strong className="strong-match-status">{user.proposalNo}</strong>
                            </Link>
                        </div>
                    </>
                }
            </aside>
            <section className="additional-main-section">
                <div className="resume-registration-form">
                    <ResumeRegistContainer />
                    <UnivSearchContainer />
                </div>
            </section>
        </div>
    )
}

export default AdditionalInfoBody;