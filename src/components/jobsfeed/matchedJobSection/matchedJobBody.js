const MatchedJobBody = ({ data }) => {
    return (
        <div className="job-card-body">
            <div className="job-card-position">
                {data.position}
            </div>
            <div className="job-card-company">
                {data.company}
            </div>
            <div className="job-card-location">
                {data.location}
            </div>
            <div className="job-card-reward">
                {data.reward}
            </div>
        </div>
    )
}

export default MatchedJobBody;