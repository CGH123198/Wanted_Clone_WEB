import './activeCompanySection.scss';
import MediaQuery from "react-responsive";
import { sizes } from "../../../../lib/styles/mediaQuery";

import ActiveCompanySlide from './activeCompanySlide/activeCompanySlide';

const ActiveCompanySection = () => {
    return (
        <>  
            <MediaQuery minWidth={sizes.narrowest}>
                <h3 className="active-company-title-style">적극 채용 중인 회사</h3>
            </MediaQuery>
            <ActiveCompanySlide />
        </>
    )
}

export default ActiveCompanySection;