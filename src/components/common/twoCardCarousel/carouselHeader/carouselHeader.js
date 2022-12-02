import './carouselHeader.scss';
import { Link } from 'react-router-dom';

const CarouselHeader = ({children}) => {
    return (
        <header className="title-list-header">
            <div className="title-list-wrapper">
                <h2>
                    <Link to="#">
                        {children}
                    </Link>
                    <span>회사들을 모아봤어요</span>
                </h2>
                <div className="title-list-more-button">
                    <Link to="#">
                        <span>포지션으로 더보기</span>
                        <span className="title-list-button-arrow">
                            <svg xmlns="https://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0.34467 8.24802C0.0517767 8.51161 0.0517767 8.93898 0.34467 9.20257C0.637563 9.46617 1.11244 9.46617 1.40533 9.20257L5.65533 5.37773C5.94822 5.11414 5.94822 4.68677 5.65533 4.42317L1.40533 0.59833C1.11244 0.334736 0.637563 0.334736 0.34467 0.59833C0.0517767 0.861923 0.0517767 1.28929 0.34467 1.55288L4.06434 4.90045L0.34467 8.24802Z" fill="currentColor"></path></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default CarouselHeader;