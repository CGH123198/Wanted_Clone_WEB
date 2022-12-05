import './jobTable.scss';
import styled from 'styled-components';
import JobItem from './jobItem';
import JobGroupData from '../../../lib/jobData/jobGroup.json';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const JobCategoryNav = styled.section`
    display: ${ ({open}) => open ? "block" : "none" };
`;


const JobTable = ({categoryOpen }) => {
    const [jobGroup, setJobGroup] = useState();
    const { jobgroupId } = useParams();
    useEffect( () => {
        setJobGroup(JobGroupData.find( group => group.jobGroupId === jobgroupId));
    }, [jobgroupId])

    return (
        <JobCategoryNav className="job-category-table" open={categoryOpen} >
            <div className="job-category-table-top">
                <p className="job-category-table-top-title">직무를 선택해 주세요. (최대 5개 선택 가능)</p>
                <div className="job-category-table-top-list">
                    {
                        jobGroup &&
                        jobGroup.job.map( job => <JobItem data={job}/>)
                    }
                </div>
            </div>
        </JobCategoryNav>
    )
}

export default JobTable;