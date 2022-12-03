import './companyHeader.scss';
import styled from 'styled-components';
import { useState } from 'react';

const ImgDiv = styled.div`
    background-image: url(${ ({img}) => img });
`;

const FollowButton = styled.button`
    background-color: #2658f6;
    border-color: #2658f6;
    color: #fff;
    
    &:hover {
        border-color: #002fdb;
    }

    ${
        ({follow}) => follow && `
            background-color: #f2f4f7!important;
            color: #ccc!important;
            border: none!important;
        `
    }
`;


const CompanyHeader = ({ data }) => {
    const [follow, setFollow] = useState(false);

    const isFollow = () => {
        if(follow) {
            setFollow(false);
            //follow 취소 Action dispatch
        } else {
            setFollow(true);
            //follow Action dispatch
        }
    }
    return (
        <div className="company-header">
        {
            data &&
            <div className="company-header-inner-wrapper">
                <ImgDiv className="company-header-logo-img" img={data.logo}/>
                <h2>{data.company}</h2>
                <FollowButton 
                    className="company-header-follow-button"
                    onClick={isFollow}
                    follow={follow}
                >
                    <span>팔로우</span>
                </FollowButton>
            </div>
        }
        </div>
    )
}

export default CompanyHeader;