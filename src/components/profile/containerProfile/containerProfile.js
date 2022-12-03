import './containerProfile.scss';
import BookMarkBodyContainer from "../bookMarkBody/bookMarkBodyContainer";

const ContainerProfile = ({ children }) => {
    return (
        <div className="container-profile">
            <nav className="nav-profile">
                <h2>
                    <p>{children}</p>
                    <button type="button" className="nav-profile-button">{children}</button>
                </h2>
            </nav>
            <BookMarkBodyContainer />
        </div>
    )
}

export default ContainerProfile;