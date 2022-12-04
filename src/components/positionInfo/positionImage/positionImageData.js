const PositionImageData = ({data, alt}) => {
    return (
        <div className="position-image-data">
            <img src={data} alt={alt} />
        </div>
    )
}

export default PositionImageData;