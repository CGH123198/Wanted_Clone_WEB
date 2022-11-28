import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sizes } from '../../../lib/styles/mediaQuery';
import './matchedJobSection.scss';

const AtricleWrap = styled.article`
    position: relative;
    max-width: 1060px;
    margin: 0 auto;

    & header {
        position: relative;
        margin-bottom: 30px;
    }

    @media screen and (max-width: ${sizes.narrowest}) {
        & header {
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: ${sizes.narrow}) {
        margin: 0 auto;
        width: 87.72%;
    }
`;

const MatchedJobSection = () => {
    return (
        <AtricleWrap>
            <header>
                <h2 className="matched-job-title-h2">
                    <div className="matched-job-title-main">
                        <img aria-label="wantedai-logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="114" alt="logo-wantedai" style={{ marginBottom: "3px" }} />
                        가 제안하는 합격률 높은 포지션
                        <button type="button" className="matched-job-list-title-button">
                            <svg viewBox="0 0 17 17"><defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
                        </button>
                    </div>
                    <div className="matched-job-title-more">
                        <Link to="#">
                            포지션 전체보기
                        </Link>
                        <span>{'>'}</span>
                    </div>
                </h2>
            </header>
        </AtricleWrap>
    )
}

export default MatchedJobSection;