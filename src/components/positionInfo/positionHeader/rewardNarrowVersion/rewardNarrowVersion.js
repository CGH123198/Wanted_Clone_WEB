import './rewardNarrowVersion.scss';

const RewardNarrowVersion = ({data}) => {
    return (
        <div className="visible-narrow">
            <div className="before-application-container">
                <header>
                    <div className="reward-container">
                        <h3>채용보상금</h3>
                        {
                            data &&
                            <ul>
                                <li>
                                    <h4>추천인</h4>
                                    <p>{data[0].compensationForRecommender}원</p>
                                </li>
                                <li>
                                    <h4>지원자</h4>
                                    <p>{data[0].compensationForApplicant}원</p>
                                </li>
                            </ul>
                        }
                    </div>
                </header>
            </div>
        </div>
    )
}

export default RewardNarrowVersion;