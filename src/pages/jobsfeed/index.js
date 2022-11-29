import MainBannerCarouselContainer from '../../components/jobsfeed/mainBannerCarousel/mainBannerCarouselContainer';
import LineBannerButton from '../../components/jobsfeed/lineBannerButton/lineBannerbutton';
import MatchedJobSection from '../../components/jobsfeed/matchedJobSection/matchedJobSection';
import NavShorcut from '../../components/jobsfeed/navShortcut/navShorcut';

const JobsFeedPage = () => {
    return (
        <>
            <MainBannerCarouselContainer />
            <LineBannerButton />
            <MatchedJobSection />
            <NavShorcut />
        </>
    )
}

export default JobsFeedPage;