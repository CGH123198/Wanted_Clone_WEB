import CarouselComponent from "../../common/carousel/carouselComponent";
import data from './mainBannerData.json';

const MainBannerCarouselContainer = () => {
    return (
        <CarouselComponent data={data} />
    )
}

export default MainBannerCarouselContainer;