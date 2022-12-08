import './careerInsightContent.scss';

const CareerInsightContent = ({ data }) => {
    return(
        <div className="data-box" aria-label={data.eventTitle} >
            <div className="data-image">
                <img src={data.eventImgThumbnail} alt="" />
            </div>
            <div className="data-text">
                <p className="data-text-title">{data.eventTitle}</p>
                <p className="data-text-description">{data.thumbnailLogoDesc}</p>
                <div className="data-text-writer">
                    <img src={data.thumbnailLogo} alt="" />
                    <span>{data.thumbnailLogoTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default CareerInsightContent;