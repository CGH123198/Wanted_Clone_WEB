import './positionDescription.scss';

import KakaoMap from './kakaoMap';

const PositionDescription = ({data}) => {
    return (
        <div className="position-content-wrapper">   
            <div dangerouslySetInnerHTML={{__html: data[0].info}}></div>
            <hr className="position-content-divider" />
            <section className="position-workplace">
                <div>
                    <span className="deadline-header">마감일</span>
                    <span className="deadline-body">상시</span>
                </div>
                <div>
                    <span className="deadline-header">근무지역</span>
                    <span className="deadline-body">{data[0].location}</span>
                </div>
                <KakaoMap data={data} />
            </section>
        </div>
    )
}

export default PositionDescription;