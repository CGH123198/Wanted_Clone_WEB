import MainBannerCarouselContainer from '../../components/landing/mainBannerCarousel/mainBannerCarouselContainer';
import CareerInsightSection from '../../components/landing/careerInsightSection/careerInsightSection';
import SectionDivider from '../../components/common/sectionDivider/sectionDivider';
import RecruitmentSection from '../../components/landing/recruitmentSection/recruitmentSection';

const LandingPage = () => {
    return(
        <>
            <MainBannerCarouselContainer />
            <CareerInsightSection />
            <SectionDivider />
            <RecruitmentSection />
        </>
    )
}

export default LandingPage;