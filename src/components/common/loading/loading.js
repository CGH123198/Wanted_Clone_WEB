import { Audio } from 'react-loader-spinner';


const LoadingSpinner = () => {
    return (
        <div style={{ display: "block", position: "relative", margin: "auto" }}>
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    )
}

export default LoadingSpinner;