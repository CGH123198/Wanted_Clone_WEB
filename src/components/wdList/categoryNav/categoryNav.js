import './categoryNav.scss';
import { sizes } from '../../../lib/styles/mediaQuery';
import styled from 'styled-components';
import JobGroupData from '../../../lib/jobData/jobGroup.json'

import JobTable from '../jobTable/jobTable';
import JobGroupTable from '../jobGroupTable/jobGroupTable';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';


const JobArrowBtn = styled.span`
    display: inline-block;
    position: relative;
    border: 1px solid ${ props => props.open ? "#767676" : "#e1e2e3" };
    border-radius: 9999px;
    background-color: #fff;
    width: 26px;
    height: 26px;
    transition: .3s;
    flex-shrink: 0;

    & svg {
        margin-top: 7px;
        transition: inherit;
        transform: rotate(${ props => props.open ? "180deg" : "0" });
    }

    @media screen and (max-width: ${sizes.narrowest}px) {
        width: 20px;
        height: 20px;

        & svg {
            margin-top: 5px;
        }
    }
`;


const CategoryNav = () => {
    const [groupOpen, setGroupOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [jobGroup, setJobGroup] = useState();
    const [job, setJob] = useState();

    const { jobgroupId, jobId } = useParams();
    const groupRef = useRef();
    const jobRef = useRef();

    console.log(job)

    const isGroupOpen = () => {
        groupOpen ? setGroupOpen(false) : setGroupOpen(true);
    }

    const isCategoryOpen = () => {
        categoryOpen ? setCategoryOpen(false) : setCategoryOpen(true);
    }

    useEffect( () => {
        window.addEventListener("click", (e) => {
            if(!groupRef.current.contains(e.target) && groupOpen) { setGroupOpen(false); }
        })
    }, [groupOpen])

    useEffect( () => {
        window.addEventListener("click", (e) => {
            if(!jobRef.current.contains(e.target) && categoryOpen) { setCategoryOpen(false); }
        })
    }, [categoryOpen])

    useEffect( () => {
        setJobGroup(JobGroupData.find(elem => elem.jobGroupId === jobgroupId))
        setJob(JobGroupData.find(elem => elem.jobGroupId === jobgroupId).job)
       
    },[jobgroupId]);

    return (
        <article className="category-navbar-box">
            <div className="category-navbar-body">
                <div>
                    <button className="job-group-button" type="button" onClick={isGroupOpen} ref={groupRef}>
                        <span className="job-group-title">
                            {  jobGroup && jobGroup.jobGroup }
                        </span>
                        <JobArrowBtn open={groupOpen}>
                            <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg>
                        </JobArrowBtn>
                    </button>
                    <JobGroupTable groupOpen={groupOpen}/>
                </div>
                <div className="job-category-detail">
                    <button type="button" className="job-category-button" onClick={isCategoryOpen} ref={jobRef}>
                        <span className="job-category-title">
                            {
                               job &&
                               job.find(elem => elem.jobId === jobId).job
                            }
                        </span>
                        <JobArrowBtn open={categoryOpen} >
                            <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg>
                        </JobArrowBtn>
                    </button>
                    <JobTable categoryOpen={categoryOpen} />
                </div>
            </div>
        </article>
    )
}

export default CategoryNav;