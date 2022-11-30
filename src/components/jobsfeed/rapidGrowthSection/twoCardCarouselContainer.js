import TwoCardCarousel from "../../common/twoCardCarousel/twoCardCarousel"
import { useState } from 'react';
import data from './rapidGrowthData.json';

const TwoCardCarouselContainer = () => {
    const [follow, setFollow] = useState(false);

    return (
        <TwoCardCarousel data={data} />
    )
}

export default TwoCardCarouselContainer;