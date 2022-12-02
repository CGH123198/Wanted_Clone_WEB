import './containerProfile.scss';

const ContainerProfile = ({ children }) => {
    return (
        <div className="container-profile">
            <nav className="nav-profile">
                <h2>
                    <p>{children}</p>
                    <button type="button" className="nav-profile-button">{children}</button>
                </h2>
            </nav>
        </div>
    )
}

export default ContainerProfile;