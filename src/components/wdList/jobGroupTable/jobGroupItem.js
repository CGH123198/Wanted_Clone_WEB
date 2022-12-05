import styled from 'styled-components';

import { Link, useParams } from 'react-router-dom';

const JobGroupLink = styled(Link)`
    display: block;
    align-items: center;
    font-size: 16px;
    color: ${ props => props.selected ? "#36f" : "#333" } !important;
    padding: 11px 25px 9px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
`;

const JobGroupItem = ({ data }) => {
    const { jobgroupId } = useParams();

    return (
        <li>
            <JobGroupLink
                selected={jobgroupId === data.jobGroupId }
                to={`/wdlist/${data.jobGroupId}/${data.job[0].jobId}`}
            >
            {data.jobGroup}</JobGroupLink>
        </li>
    )
}

export default JobGroupItem;