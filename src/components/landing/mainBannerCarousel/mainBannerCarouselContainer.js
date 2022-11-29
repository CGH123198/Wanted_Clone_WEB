import CarouselComponent from "../../common/carousel/carouselComponent"
import data from './landingBannerData.json';

const MainBannerCarouselContainer = () => {
    return (
        <CarouselComponent data={data} />
    )
}

export default MainBannerCarouselContainer;