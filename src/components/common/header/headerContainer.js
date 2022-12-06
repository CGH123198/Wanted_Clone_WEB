import Header from './header';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getUserInfo } from '../../../store/actions/user';

const HeaderContainer = () => {
    const { auth, user } = useSelector(({auth, user}) =>({
        auth: auth.auth,
        user: user.user,
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        if(!localStorage.getItem("auth") && auth) {
            localStorage.setItem("auth", JSON.stringify(auth));
        }
        if(!localStorage.getItem("userId") && user) {
            localStorage.setItem("userId", JSON.stringify(user)); 
        }
    }, [auth, user])

    useEffect( () => {
        console.log("auth: ", auth, "user: ", user);
        if(localStorage.getItem("auth") && !user) {
            const localAuth = JSON.parse(localStorage.getItem("auth"));
            dispatch(getUserInfo(localAuth.jwt, localAuth.userId));
        }

        if(auth && !user) {
            dispatch(getUserInfo(auth.jwt, auth.userId));
        }
    }, [auth, user]);

    return (
        <Header user={user}/>
    )
}

export default HeaderContainer;