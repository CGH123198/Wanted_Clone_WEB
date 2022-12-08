import Header from './header';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { pushLocalAuth } from '../../../store/actions/auth';
import { getUserInfo } from '../../../store/actions/user';
import userEvent from '@testing-library/user-event';

const HeaderContainer = () => {
    const { auth, user } = useSelector(({auth, user}) =>({
        auth: auth.auth,
        user: user.user,
    }))
    const dispatch = useDispatch();

    useEffect( () => {
        if(!auth) {
            if(localStorage.getItem("auth")) {
                const localAuth = JSON.parse(localStorage.getItem("auth"));
                dispatch(pushLocalAuth(localAuth));
            }
        } else {
            if(!localStorage.getItem("auth")) {
                localStorage.setItem("auth", JSON.stringify(auth));
            }
            if(!user) {
                dispatch(getUserInfo(auth.jwt, auth.userId));
            }
        }
    }, [auth, user]);

    return (
        <Header user={user} auth={auth}/>
    )
}

export default HeaderContainer;