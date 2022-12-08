import './bookMarkBody.scss';
import FourCardData from '../../common/fourCardCarousel/fourCardData';

const BookMarkBody = ({bookMarkList, auth, user}) => {
    return (
        <div className='bookmark-container'>
            <div className="bookmark-list">
                <div className="bookmark-list-container">
                    <ul className="bookmark-job-list">
                        {
                            bookMarkList &&
                            bookMarkList.map(elem => 
                            <li>
                                <FourCardData 
                                    data={elem}
                                    auth={auth} 
                                    user={user}
                                />
                            </li>)
                        }
                    </ul>
                        {
                            (!bookMarkList || bookMarkList.length === 0 ) &&
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