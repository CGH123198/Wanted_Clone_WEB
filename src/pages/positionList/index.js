import styled from 'styled-components';

import Padding from '../../components/common/padding/padding';
import CompanyAllContainer from '../../components/positionList/companyAllContainer/companyAllContainer';

const CompanyDetailWrap = styled.div`
    position: relative;
    width: 100%;
    min-height: 720px;
    background-color: #fff;
`;

const PositionListPage = () => {
    return (
        <CompanyDetailWrap className="company-detail-container">
            <Padding />
            <CompanyAllContainer />
        </CompanyDetailWrap>
    )
}

export default PositionListPage;