import EditNameModal from '../editModal/editNameModal';

import { useEffect, useState } from 'react';

const AccountManagementSection = ({ user, auth }) => {
    const [phoneNo, setPhoneNo] = useState("");
    const [openNameModal, setOpenNameModal] = useState(false);

    const isOpenNameModal = () => {
        openNameModal ? 
        setOpenNameModal(false):
        setOpenNameModal(true);
    }
    useEffect( () => {
        if(user) {
            const phoneNoArr = user.phoneNo.split("");
            phoneNoArr.splice(3, 0, "-");
            phoneNoArr.splice(8, 0, "-");
            setPhoneNo(phoneNoArr.join(""));
        }
    }, [user]);

    return (
        <>
            <section className="user-info-account-management-section">
                <p className='user-info-account-management-title'>계정 관리</p>
                <p className="user-info-account-management-guide-message">
                    서비스에서 사용하는 내 계정 정보를 관리할 수 있습니다.
                </p>
                <ul>
                    <li>
                        <p>이메일</p>
                        <p>{user.email}</p>
                    </li>
                    <li onClick={isOpenNameModal}>
                        <p>이름</p>
                        <p>{user.userName}</p>
                        <span><svg width="12" height="12" viewBox="0 0 8 14" color="#888"><path fillRule="evenodd" clipRule="evenodd" d="M0.969605 13.0303C1.2625 13.3232 1.73737 13.3232 2.03027 13.0303L7.53027 7.53033C7.82316 7.23744 7.82316 6.76257 7.53027 6.46967L2.03033 0.969673C1.73744 0.676778 1.26257 0.676775 0.969673 0.969667C0.676778 1.26256 0.676776 1.73743 0.969667 2.03033L5.93928 7L0.969605 11.9697C0.676712 12.2626 0.676712 12.7374 0.969605 13.0303Z" fill="#888"></path></svg></span>
                    </li>
                    <li>
                        <p>휴대폰 번호</p>
                        <p>+82 {phoneNo}</p>
                        <span><svg width="12" height="12" viewBox="0 0 8 14" color="#888"><path fillRule="evenodd" clipRule="evenodd" d="M0.969605 13.0303C1.2625 13.3232 1.73737 13.3232 2.03027 13.0303L7.53027 7.53033C7.82316 7.23744 7.82316 6.76257 7.53027 6.46967L2.03033 0.969673C1.73744 0.676778 1.26257 0.676775 0.969673 0.969667C0.676778 1.26256 0.676776 1.73743 0.969667 2.03033L5.93928 7L0.969605 11.9697C0.676712 12.2626 0.676712 12.7374 0.969605 13.0303Z" fill="#888"></path></svg></span>
                    </li>
                </ul>
            </section>
            {
                openNameModal &&
                <EditNameModal isOpenNameModal={isOpenNameModal} user={user} auth={auth} />
            }
        </>
    )
}

export default AccountManagementSection;