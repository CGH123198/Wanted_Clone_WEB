import data from './matchedJobData.json';
import FourCardCarousel from '../../common/fourCardCarousel/fourCardCarousel';

const MatchedJobCarouselContainer = () => {
    return (
        <FourCardCarousel data={data} />
    )

}

export default MatchedJobCarouselContainer;