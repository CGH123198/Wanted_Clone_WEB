import HeaderContainer from '../components/common/header/headerContainer';
import Footer from '../components/common/footer/footer';
import  { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const PageBodyDiv= styled.div`
    margin: 50px auto 0;
`;

const PageLayout = () => {
    return (
        <div>
            <HeaderContainer/>
            <PageBodyDiv>
                <Outlet />
            </PageBodyDiv>
            <Footer/>
        </div>
    )
}

export default PageLayout;