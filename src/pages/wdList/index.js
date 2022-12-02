import styled from 'styled-components';
import CategoryNav from '../../components/wdList/categoryNav/categoryNav';
import JobListContentWrapper from '../../components/wdList/jobListContentWrapper/jobListContentWrapper';
import { Outlet } from 'react-router-dom';

const WdListWrap = styled.div`
    background-color: #fff;
    min-height: calc(100vh - 50px);
`;


const WdListPage = () => {
    return (
        <WdListWrap>
            <CategoryNav />
            <JobListContentWrapper />
        </WdListWrap>
    )
}

export default WdListPage;