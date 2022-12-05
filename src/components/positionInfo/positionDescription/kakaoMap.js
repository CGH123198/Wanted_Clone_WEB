import { useEffect } from 'react';
import { useRef, useState } from 'react';

const KakaoMap = ({data}) => {
    const mapRef = useRef();

    useEffect( () => {
        if(data) {
            const options = {
                center: new window.kakao.maps.LatLng(data.latitude, data.longitude),
                level: 3
            };
            const map = new window.kakao.maps.Map(mapRef.current, options);
        }
    }, [data])

    return (
        <a 
            target="_blank"
            rel="noreferrer noopener"
            className="KakoMap" 
            ref={mapRef} 
            href={`https://map.kakao.com/link/map/${data.latitude}/${data.longitude}`}
        >
        </a>
    )
}

export default KakaoMap;