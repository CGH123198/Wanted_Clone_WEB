import styled from "styled-components";
import Padding from "../../components/common/padding/padding";
import UserInfoBody from "../../components/userInfo/userInfoBody";

const ProfileWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const UserInfoPage = () => {
    return(
        <ProfileWrap className="user-info-wrap">
            <Padding />
            <UserInfoBody />
        </ProfileWrap>
    )
}

export default UserInfoPage;