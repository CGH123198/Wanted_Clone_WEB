import styled from 'styled-components';
import './jobGroupTable.scss';
import JobGroupData from '../../../lib/jobData/jobGroup.json';

import JobGroupItem from './jobGroupItem';

const JopGroupNav = styled.section`
    display:  ${ ({open}) => open ? "block" : "none" };
`;


const JobGroupTable = ({groupOpen}) => {

    return (
        <JopGroupNav role="navigation" className="jobGroup-table" open={groupOpen} >
            <ul>
                {
                    JobGroupData &&
                    JobGroupData.map( jobGroup => <JobGroupItem data={jobGroup} />)
                }
            </ul>
        </JopGroupNav>        
    )
}


export default JobGroupTable;