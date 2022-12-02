import './bookMarkBody.scss';
import FourCardData from '../../common/fourCardCarousel/fourCardData';

const BookMarkBody = ({data = null}) => {
    return (
        <div className='bookmark-container'>
            <div className="bookmark-list">
                <div className="bookmark-list-container">
                    <ul className="bookmark-job-list">
                        {
                            data &&
                            <li>
                                <FourCardData data={data} />
                            </li>

                        }
                    </ul>
                        {
                            !data &&
                            <div className="empty-message-container">
                                <div className="custom-message">
                                    아직 북마크한 포지션이 없습니다.
                                </div>
                            </div>    
                        }
                </div>
            </div>
        </div>
    )
}

export default BookMarkBody;