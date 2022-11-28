import CarouselComponent from '../../components/common/carousel/carouselComponent';
import CareerInsightSection from '../../components/landing/careerInsightSection/careerInsightSection';
import SectionDivider from '../../components/common/sectionDivider/sectionDivider';
import RecruitmentSection from '../../components/landing/recruitmentSection/recruitmentSection';

const LandingPage = () => {
    return(
        <>
            <CarouselComponent />
            <CareerInsightSection />
            <SectionDivider />
            <RecruitmentSection />
        </>
    )
}

export default LandingPage;