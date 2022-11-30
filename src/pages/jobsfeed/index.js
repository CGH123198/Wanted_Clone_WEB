import MainBannerCarouselContainer from '../../components/jobsfeed/mainBannerCarousel/mainBannerCarouselContainer';
import LineBannerButton from '../../components/jobsfeed/lineBannerButton/lineBannerbutton';
import MatchedJobSection from '../../components/jobsfeed/matchedJobSection/matchedJobSection';
import NavShorcut from '../../components/jobsfeed/navShortcut/navShorcut';
import RapidGrowthSection from '../../components/jobsfeed/rapidGrowthSection/rapidGrowthSection';

const JobsFeedPage = () => {
    return (
        <>
            <MainBannerCarouselContainer />
            <LineBannerButton />
            <MatchedJobSection />
            <NavShorcut />
            <RapidGrowthSection />
        </>
    )
}

export default JobsFeedPage;