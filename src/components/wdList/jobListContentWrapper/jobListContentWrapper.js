import './jobListContentWrapper.scss';
import { sizes } from '../../../lib/styles/mediaQuery';

import FilterInWdListContainer from './filterInWdList/filterInWdListContainer';
import BookMarkSectionContainer from './bookMarkSection/bookMarkSectionContainer';
import ActiveCompanySection from './activeCompanySection/activeCompanySection';

import { Outlet } from 'react-router-dom';


const JobListContentWrapper = () => {
    
    return (
        <div className="joblist-contentwrapper">
            <div>
                <FilterInWdListContainer />
                <hr className="joblist-content-divider" />
                <BookMarkSectionContainer />
                <ActiveCompanySection />
                <Outlet />
            </div>
        </div>
    )
}

export default JobListContentWrapper;