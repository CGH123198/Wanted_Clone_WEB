import EditPasswordModal from "../editModal/editPasswordModal";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { logoutAction } from '../../../store/actions/auth';
import { makeUserInfoEmpty } from "../../../store/actions/user";
import { patchMembershipWithDrawalAction } from "../../../store/actions/withDrawal";

const PrivateInfoSection = ({ user, auth }) => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    
    const { withDrawal } = useSelector(({withDrawal}) => ({
        withDrawal: withDrawal.withDrawal
    }))

    const isOpenModal = () => {
        openModal ?
        setOpenModal(false):
        setOpenModal(true);
    }

    const registerWithDrawlClick = () => {
        if (window.confirm("정말 탈퇴하시겠습니까??")){ 
            dispatch(patchMembershipWithDrawalAction(auth.jwt, auth.userId));
        }
    }
    console.log("withDrawal: ", withDrawal)
    useEffect( () => {
        if(withDrawal) {
            alert(withDrawal)
            localStorage.removeItem("auth");
            dispatch(logoutAction());
            dispatch(makeUserInfoEmpty());
            window.location.replace("/");
        }
    }, [withDrawal])

    return (
        <>
            <section className="user-info-account-management-section">
                <p className='user-info-account-management-title'>개인 정보 보호</p>
                <p className="user-info-account-management-guide-message">
                    내 계정을 안전하게 보호하기 위한 정보를 관리할 수 있습니다.
                </p>
                <ul className="private-info-protection-ul">
                    <li onClick={isOpenModal}>
                        <p>비밀번호 변경</p>
                        <span><svg width="12" height="12" viewBox="0 0 8 14" color="#888"><path fillRule="evenodd" clipRule="evenodd" d="M0.969605 13.0303C1.2625 13.3232 1.73737 13.3232 2.03027 13.0303L7.53027 7.53033C7.82316 7.23744 7.82316 6.76257 7.53027 6.46967L2.03033 0.969673C1.73744 0.676778 1.26257 0.676775 0.969673 0.969667C0.676778 1.26256 0.676776 1.73743 0.969667 2.03033L5.93928 7L0.969605 11.9697C0.676712 12.2626 0.676712 12.7374 0.969605 13.0303Z" fill="#888"></path></svg></span>
                    </li>
                    <li onClick={registerWithDrawlClick}>
                        <p>회원 탈퇴</p>
                        <span><svg width="12" height="12" viewBox="0 0 8 14" color="#888"><path fillRule="evenodd" clipRule="evenodd" d="M0.969605 13.0303C1.2625 13.3232 1.73737 13.3232 2.03027 13.0303L7.53027 7.53033C7.82316 7.23744 7.82316 6.76257 7.53027 6.46967L2.03033 0.969673C1.73744 0.676778 1.26257 0.676775 0.969673 0.969667C0.676778 1.26256 0.676776 1.73743 0.969667 2.03033L5.93928 7L0.969605 11.9697C0.676712 12.2626 0.676712 12.7374 0.969605 13.0303Z" fill="#888"></path></svg></span>
                    </li>
                </ul>
            </section>
            {
                openModal &&
                <EditPasswordModal isOpenModal={isOpenModal} auth={auth} />
            }
        </>
    )
}
export default PrivateInfoSection;