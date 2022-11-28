import CarouselComponent from '../../components/common/carousel/carouselComponent';
import LineBannerButton from '../../components/jobsfeed/lineBannerButton/lineBannerbutton';
import MatchedJobSection from '../../components/jobsfeed/matchedJobSection/matchedJobSection';

const JobsFeedPage = () => {
    return (
        <>
            <CarouselComponent />
            <LineBannerButton />
            <MatchedJobSection />
        </>
    )
}

export default JobsFeedPage;