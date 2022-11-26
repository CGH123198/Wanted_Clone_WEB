import Header from '../components/header/header';
import  { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const PageBodyDiv= styled.div`
    margin: 55px auto 0;
`;

const PageLayout = () => {
    return (
        <div>
            <Header/>
            <PageBodyDiv>
                <Outlet />
            </PageBodyDiv>
        </div>
    )
}

export default PageLayout;