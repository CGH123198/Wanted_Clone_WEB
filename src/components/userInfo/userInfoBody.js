import './userInfoBody.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { pushLocalAuth } from '../../store/actions/auth';
import { getUserInfo } from '../../store/actions/user';

import ProfileImageSection from "./profileImageSection/profileImageSection";
import AccountManagementSectionContainer from './accountManagementSection/accountManagementSectionContainer';
import PrivateInfoSection from './privateInfoSection/privateInfoSection';

const UserInfoBody = () => {
    const { user, auth, userError, authError } = useSelector(({user, auth,}) => ({
        user: user.user,
        userError: user.error,
        auth: auth.auth,
        authError: auth.authError,
    }))

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( () => {
        if(!auth) {
            if(!localStorage.getItem("auth")) {
                navigate("/auth/login");
            } else {
                const localAuth = JSON.parse(localStorage.getItem("auth"));
                dispatch(pushLocalAuth(localAuth));
            }
        } else {
            if(!user) {
                dispatch(getUserInfo(auth.jwt, auth.userId));
            }
        }   
    }, [auth, user]);

    return (
        <div className="user-info-body-container">
            {
                userError &&
                `유저 정보가 없습니다. ${userError}`
            }
            {
                authError &&
                <Link to="/auth/login">로그인이 필요합니다.(로그인 하러가기.) {authError}</Link>
            }
            {
                (auth && user) &&
                <>
                    <ProfileImageSection user={user} />
                    <AccountManagementSectionContainer user={user} auth={auth}/>
                    <PrivateInfoSection user={user} auth={auth} />
                </>
            }
        </div>
    )
}

export default UserInfoBody;