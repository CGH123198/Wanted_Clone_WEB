import MainBannerCarouselContainer from '../../components/landing/mainBannerCarousel/mainBannerCarouselContainer';
import CareerInsightSection from '../../components/landing/careerInsightSection/careerInsightSection';
import SectionDivider from '../../components/common/sectionDivider/sectionDivider';
import RecruitmentSection from '../../components/landing/recruitmentSection/recruitmentSection';
import { Outlet, useLocation } from 'react-router-dom';

const LandingPage = () => {
    const location = useLocation();

    return(
        <>
            <MainBannerCarouselContainer />
            { location.pathname === "/" &&
                <CareerInsightSection />
            }
            <Outlet />
            <SectionDivider />
            <RecruitmentSection />
        </>
    )
}

export default LandingPage;