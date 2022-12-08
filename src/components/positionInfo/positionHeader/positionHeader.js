import './positionHeader.scss';

import { Link } from 'react-router-dom';

import RewardNarrowVersion from './rewardNarrowVersion/rewardNarrowVersion';

const PositionHeader = ({data}) => {
    return (
        <section className="position-header-class">
            <h2>{data.position}</h2>
            <div>
                <h6><Link to={`/companies/${data[3].companyId}`}>{data[3].companyName}</Link></h6>
                <div className="responsive-level">
                    <div className="tooltip-container">
                        <button type="button" className="tooltip-label">
                            <div className="response-level-label-container">
                                <span>{data[3].responseRate}</span>
                            </div>
                        </button>
                    </div>
                    <span className="position-header-location-pc-container">
                        {data[0].location}
                        <span className="position-header-dot">.</span>
                        {data[0].country}
                    </span>
                </div>
            </div>
            <div className="position-header-location-mobile-container">
                {data[0].location}
                <span className="position-header-dot">.</span>
                {data[0].country}
            </div>
            <div className="position-tags-class">
                <ul>
                    {
                        data &&
                        data[2].positionTagArr.map(tag => <li><Link to="#">{tag}</Link></li>)
                    }
                </ul>
            </div>
            <RewardNarrowVersion data={data} />
        </section>
    )
}

export default PositionHeader;