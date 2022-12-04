import "./rewardWideVersion.scss";
import BookMarkButtonContainer from "../bookMarkButton/bookMarkButtonContainer";
import ApplyButtonContainer from '../applyButton/applyButtonContainer';

const RewardWideVersion = ({data}) => {
    return (
        <aside className="job-process-container">
                <div className="before-application-container">
                    <header>
                        <div className="reward-wide-version-container">
                            <h3>채용보상금</h3>
                            {
                                data &&
                                <ul>
                                    <li>
                                        <h4>추천인</h4>
                                        <p>{data.reward.recommender}원</p>
                                    </li>
                                    <li>
                                        <h4>지원자</h4>
                                        <p>{data.reward.applicant}원</p>
                                    </li>
                                </ul>
                            }
                        </div>
                        <BookMarkButtonContainer />
                        <ApplyButtonContainer />
                    </header>
                </div>
        </aside>
    )
}

export default RewardWideVersion;