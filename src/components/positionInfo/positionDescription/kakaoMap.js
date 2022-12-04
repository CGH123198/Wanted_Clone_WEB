import { useEffect } from 'react';
import { useRef } from 'react';

const KakaoMap = ({data}) => {
    const mapRef = useRef();
    
    useEffect( () => {
        if(data) {
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            const map = new window.kakao.maps.Map(mapRef.current, options);
        }
    }, [data])

    return (
        <div className="KakoMap" ref={mapRef}>

        </div>
    )
}

export default KakaoMap;