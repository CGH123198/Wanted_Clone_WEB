import './careerInsightContent.scss';

const CareerInsightContent = ({ data }) => {
    return(
        <div className="data-box" aria-label={data.title} >
            <div className="data-image">
                <img src={data.img} alt="" />
            </div>
            <div className="data-text">
                <p className="data-text-title">{data.title}</p>
                <p className="data-text-description">{data.detail}</p>
                <div className="data-text-writer">
                    <img src={data.profile} alt="" />
                    <span>{data.writer}</span>
                </div>
            </div>
        </div>
    )
}

export default CareerInsightContent;