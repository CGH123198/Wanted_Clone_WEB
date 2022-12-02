import MediaQuery from "react-responsive";
import { sizes } from "../../../../../lib/styles/mediaQuery";
import './activeCompanySlide.scss';

import data from '../activeCompanyData/activeCompanyData.json';

import ActiveCompanyData from "../activeCompanyData/activeCompanyData";

const ActiveCompanySlide = () => {
    
    return (
        <div className="active-company-slide-wrapper">
            <MediaQuery maxWidth={sizes.narrowest}>
                <h3 className="active-company-title-style">적극 채용 중인 회사</h3>
            </MediaQuery>
            <div className="active-company-slide">
                <div className="active-company-slide-list">
                    {
                        data &&
                        data.map( elem => {
                            return <ActiveCompanyData data={elem} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ActiveCompanySlide;