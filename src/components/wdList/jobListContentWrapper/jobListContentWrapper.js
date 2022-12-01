import './jobListContentWrapper.scss';
import styled from 'styled-components';
import FilterInWdListContainer from './filterInWdList/filterInWdListContainer';

const JobListContentWrapper = () => {
    return (
        <div className="joblist-contentwrapper">
            <div>
                <FilterInWdListContainer />
                <hr className="joblist-content-divider" />
            </div>
        </div>
    )
}

export default JobListContentWrapper;