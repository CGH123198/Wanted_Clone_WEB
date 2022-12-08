import './headerNav.scss';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../../store/actions/auth';
import { makeUserInfoEmpty } from '../../../../store/actions/user'

// /profile/userInfo

const HeaderNav = () => {
    const dispatch = useDispatch();

    const logout = () => {
        if(localStorage.getItem("auth")) {
            localStorage.removeItem("auth");
            dispatch(logoutAction());   
            dispatch(makeUserInfoEmpty());
        }
        window.location.replace("/");
    }

    return (
        <div className="header-popOver-container" >
            <div className="header-popOver-wrapper">
                <ul className='menu-popOver-ul'>
                    <li><Link to="/profile/additionalInfo">My 원티드</Link></li>
                    <li><Link to="/profile/bookmark">북마크</Link></li>
                    <li><Link to="/profile/userInfo">개인정보 수정</Link></li>
                    <li onClick={logout}><Link to="/">로그아웃</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderNav;