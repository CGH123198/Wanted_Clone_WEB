import './companyIntro.scss';
import styled from 'styled-components';

import { useState } from 'react';

const ArrowDown = styled.i`
    display: inline-block;
    margin-left: 6px;
    font-size: 16px;
    line-height: 1;
    ${ ({showAll}) => showAll && `
            transform: rotate(180deg);
    `}

    &::before {
        content: 'V';
        box-sizing: border-box;
    }
`;

const CompanyInfo = styled.p`
    max-height: 81px;

    ${ ({showAll}) => showAll && `
            max-height: none;
            padding-bottom: 38px;
    `}
`;

const CompanyIntro = ({data}) => {
    const [showAll, setShowAll] = useState(false);

    const isShowAll = () => {
        showAll ? setShowAll(false) : setShowAll(true);
    }

    return(
        <div className="company-intro">
            <h3>회사 소개</h3>
            <div className="company-intro-img">
                {
                    data &&
                    data.imgUrlArr.map( (img, idx) => {
                        return (
                            <button type="button" className="company-intro-img-button" key={idx}>
                                <img src={img.imgUrl} alt="" />
                            </button>
                        )
                    })
                }
            </div>
            {
                data &&
                <CompanyInfo 
                    className="company-intro-info" 
                    dangerouslySetInnerHTML={{__html: data.introduction}}
                    showAll={showAll}
                >
                </CompanyInfo>
            }
            <button type="button" className="show-more-info" onClick={isShowAll} >
                더 보기
                <ArrowDown showAll={showAll}/>
            </button>
        </div>
    )
}

export default CompanyIntro;