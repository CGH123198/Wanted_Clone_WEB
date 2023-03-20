import "./rewardWideVersion.scss";
import BookMarkButtonContainer from "../bookMarkButton/bookMarkButtonContainer";
import ApplyButton from "../applyButton/applyButton";

const RewardWideVersion = ({ data }) => {
  return (
    <aside className="job-process-container">
      <div className="before-application-container">
        <header>
          <div className="reward-wide-version-container">
            <h3>채용보상금</h3>
            {data && (
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
            )}
          </div>
          <BookMarkButtonContainer />
          <ApplyButton />
        </header>
      </div>
    </aside>
  );
};

export default RewardWideVersion;
