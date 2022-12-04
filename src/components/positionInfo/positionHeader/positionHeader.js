import './positionHeader.scss';

import { Link } from 'react-router-dom';

import RewardNarrowVersion from './rewardNarrowVersion/rewardNarrowVersion';

const PositionHeader = ({data}) => {
    return (
        <section className="position-header-class">
            <h2>{data.position}</h2>
            <div>
                <h6><Link to={`/companies/${data.companyId}`}>{data.company}</Link></h6>
                <div className="responsive-level">
                    <div className="tooltip-container">
                        <button type="button" className="tooltip-label">
                            <div className="response-level-label-container">
                                <span>{data.responseLevel}</span>
                            </div>
                        </button>
                    </div>
                    <span className="position-header-location-pc-container">
                        {data.city}
                        <span className="position-header-dot">.</span>
                        {data.country}
                    </span>
                </div>
            </div>
            <div className="position-header-location-mobile-container">
                {data.city}
                <span className="position-header-dot">.</span>
                {data.country}
            </div>
            <div className="position-tags-class">
                <ul>
                    {
                        data &&
                        data.tags.map(tag => <li><Link to="#">#{tag}</Link></li>)
                    }
                </ul>
            </div>
            <RewardNarrowVersion data={data} />
        </section>
    )
}

export default PositionHeader;