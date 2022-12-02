import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const ProfilPageWrap = styled.div`
    background-color: #f2f4f7;
`;

const ProfileIndexPage = () => {
    return (
        <ProfilPageWrap>
            <Outlet />
        </ProfilPageWrap>
    )
}

export default ProfileIndexPage;