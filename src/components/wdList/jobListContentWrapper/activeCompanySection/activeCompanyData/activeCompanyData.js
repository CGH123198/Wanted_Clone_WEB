import styled from 'styled-components';
import './activeCompanyData.scss';
import { sizes } from '../../../../../lib/styles/mediaQuery';
import LoadingSpinner from '../../../../common/loading/loading';
import { useNavigate } from 'react-router-dom';

const CompanyBackground = styled.div`
    position: relative;
    box-sizing: border-box;
    display: block;
    background-image: url(${ ({img}) => img});
    height: 147px;
    width: 100%;
    border-radius: 3px 3px 0 0;
    background-position: 50%;
    background-size: 100% 147px;
    background-color: #f2f2f2;
    background-repeat: no-repeat;
    transition: all .5s ease-in-out;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);

    &:hover {
        background-size: 105% 155px;
    }

    @media screen and (max-width: ${sizes.narrower}px) {
        height: 120px;
        background-size: 100% 120px;

        &:hover {
            background-size: 110% 130px;
        }
    }

    @media screen and (max-width: ${sizes.narrowest}px) {
        height: 100px;
        background-size: 100% 100px;

        &:hover {
            background-size: 110% 110px;
        }
    }
`;

const CompanyLogo = styled.div`
    background-image: url(${ ({logo}) => logo });
    background-size: contain;
    background-color: #fff;
    position: absolute;
    top: -25px;
    left: 16px;
    width: 50px;
    height: 50px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
`;

const ActiveCompanyData = ({data, loading, error}) => {
    const navigate = useNavigate();
    
    const clickPositionList = () => {
        navigate(`/companies/${data.companyId}`)
    }

    return (
        <div className="active-company-data" onClick={clickPositionList}>
            { error && error }
            { loading && <LoadingSpinner />}
            <header>
                <CompanyBackground img={data.imgUrl} />
            </header>
            <footer>
                <CompanyLogo logo={data.companyLogoUrl} />
                <h4>{data.companyName}</h4>
                <h5>{data.positionNo}개 포지션</h5>
            </footer>
        </div>
    )
}

export default ActiveCompanyData;