import './containerProfile.scss';

const ContainerProfile = ({ children, title }) => {
    return (
        <div className="container-profile">
            <nav className="nav-profile">
                <h2>
                    <p>{title}</p>
                    <button type="button" className="nav-profile-button">{title}</button>
                </h2>
            </nav>
            {children}
        </div>
    )
}

export default ContainerProfile;