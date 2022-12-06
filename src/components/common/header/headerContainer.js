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

    useEffect( () => {
        console.log("auth: ", auth, "user: ", user);
        if(auth && !user) {
            dispatch(getUserInfo(auth.jwt, auth.userId));
        }
    }, [auth, user]);

    return (
        <Header user={user}/>
    )
}

export default HeaderContainer;