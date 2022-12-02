import './bookMarkSection.scss';
import { Link } from 'react-router-dom';

const BookMarkSection = () => {
    return (
        <div className="joblist-bookmark-section">
            <Link to="/profile/bookmark">
                <button type="button" >
                    <svg width="13" height="17" viewBox="0 0 13 17" style={{ color: "rgb(51, 102, 255)" }}><defs><path id="bookmarkIconFill" d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"></path></defs><g fill="none" fillRule="evenodd" transform="translate(.188)"><use fill="currentColor" xlinkHref="#bookmarkIconFill"></use></g></svg>
                    <span>북마크 모아보기</span>
                    <svg width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path></svg>
                </button>
            </Link>
        </div>
    )
}

export default BookMarkSection;