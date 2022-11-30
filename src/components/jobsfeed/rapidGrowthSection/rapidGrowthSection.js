import './rapidGrowthSection.scss';
import CarouselHeader from '../../common/twoCardCarousel/carouselHeader/carouselHeader';
import TwoCardCarouselContainer from './twoCardCarouselContainer';

const RapidGrowthSection = () => {
    return (
        <article className="company-tag">
            <div className="title-list-box">
                <CarouselHeader>
                    #급성장 중
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&amp;w=75&amp;q=75" alt="user tag icon" />
                </CarouselHeader>
                <TwoCardCarouselContainer />
            </div>
        </article>
    )
}

export default RapidGrowthSection;