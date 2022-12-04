import './positionDetail.scss';

import PositionImage from '../positionImage/positionImage';
import PositionHeader from '../positionHeader/positionHeader';
import RewardWideVersion from '../positionHeader/rewardWideVersion/rewardWideVersion';
import PositionDescription from '../positionDescription/positionDescription';

const PositionDetail = ({data}) => {
    return (
        <div className="postion-detail">
            <div className="position-detail-content-wrapper">
                <div className="position-detail-relative-wrapper">
                    <div className="position-content-class">
                        <PositionImage data={data} />
                        <PositionHeader data={data} />
                        <PositionDescription data={data} />
                    </div>
                    <RewardWideVersion data={data}/>
                </div>
            </div>
        </div>
    )
}

export default PositionDetail;