import './profileImageSection.scss';

const ProfileImageSection = ({user}) => {
    return (
        <section className="user-info-profileImage-section">
            <div className="user-info-profileImage-image">
                { user.userImg ?
                    <img src={user.userImg} width="80" height="80" alt="유저 이미지" /> :
                    <img src="https://static.wanted.co.kr/oneid-user/profile_default.png" width="80" height="80" alt="default img" />
                }
            </div>
            <p className="user-welcome-message">{user.userName}님, 환영해요.</p>
        </section>
    )
}

export default ProfileImageSection;