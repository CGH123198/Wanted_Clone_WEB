import './positionImage.scss';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PositionImageData from './positionImageData';
import { useRef, useState, useEffect } from 'react'; 
import { debounce } from 'lodash';

const PositionImage = ({data}) => {
    const [imageWidth, setImageWidth] = useState(0);
    const [scrollWidth, setSCrollWidth] = useState(0);
    const slideRef = useRef();

    const clickLeft = () => {
        slideRef.current.scrollLeft -= imageWidth;
    }

    const clickRight = () => {
        slideRef.current.scrollLeft += imageWidth;
    }

    useEffect( () => {
        window.addEventListener( "resize", debounce(() => {
            if(slideRef.current) { setSCrollWidth(slideRef.current.scrollWidth); }    
        }), 500);
        if(slideRef.current) { setSCrollWidth(slideRef.current.scrollWidth); }    
    }, [scrollWidth, imageWidth, data[1].positionImgArr.length]);

    useEffect( () => {
        setImageWidth(scrollWidth / data[1].positionImgArr.length);
    },[scrollWidth]);

    return (
        <section className="position-image-section">
            <button className="position-image-button-left" onClick={clickLeft}>
                <i className="icon-arrow-down">
                    <FontAwesomeIcon icon={faAngleDown} />
                </i>
            </button>
            <button className="position-image-button-right" onClick={clickRight}>
                <i className="icon-arrow-down">
                    <FontAwesomeIcon icon={faAngleDown} />
                </i>
            </button>
            <div className="position-image-slide" ref={slideRef}>
                {
                    data &&
                    data[1].positionImgArr.map( elem => <PositionImageData data={elem} alt={data[3].companyName} />)
                }
            </div>
        </section>
    )
}

export default PositionImage;