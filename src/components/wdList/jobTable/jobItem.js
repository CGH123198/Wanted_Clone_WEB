import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';

const JobItemBtn = styled.button`
    height: 32px;
    margin-right: 10px;
    margin-bottom: 12px;
    border: 1px solid #f2f4f7 !important;
    background: #f2f4f7 !important;
    border-radius: 20px;
    padding: 8px 14px;
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    color: #333;
`;


const JobItem = ({data}) => {
    const { jobgroupId } = useParams();

    return (
        <Link to={ data.jobId ? `/wdlist/${jobgroupId}/${data.jobId}` : "#" }><JobItemBtn type="button">{data.job}</JobItemBtn></Link>
    )
}

export default JobItem;