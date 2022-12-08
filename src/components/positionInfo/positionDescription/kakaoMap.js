import { useEffect } from 'react';
import { useRef, useState } from 'react';

const KakaoMap = ({data}) => {
    const mapRef = useRef();

    const mouseUp = e => {
        e.preventDefault();
    }

    useEffect( () => {
        if(data[0].latitude && data[0].longitude) {
            const options = {
                center: new window.kakao.maps.LatLng(data[0].latitude, data[0].longitude),
                level: 3
            };
            const map = new window.kakao.maps.Map(mapRef.current, options);
        }else {
            const options = {
                center: new window.kakao.maps.LatLng(37.573898277022, 126.9731314753),
                level: 3
            };
            const map = new window.kakao.maps.Map(mapRef.current, options);
        }
    }, [data])

    return (
        <div>
            {
                (data[0].latitude && data[0].longitude) ?
                <a  
                    className="KakoMap"
                    ref={mapRef}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={`https://map.kakao.com/link/map/${data[0].latitude}/${data[0].longitude}`}
                    onClick={mouseUp}
                    >
                </a>
                :
                <a  
                    className="KakoMap"
                    ref={mapRef}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={`https://map.kakao.com/link/map/37.573898277022/126.9731314753`}
                    onClick={mouseUp}
                    >
                </a>
            }
        </div>
    )
}

export default KakaoMap;