import './tagSlider.scss';
import { sizes } from '../../../../lib/styles/mediaQuery';
import MediaQuery from 'react-responsive';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

import TagData from './tagData';

const TagSlider = ({ data }) => {
    const [selectLimit, setSelectLimit] = useState(0);

    const isLimit = (count) => {
        setSelectLimit(count);
    }

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <section className="tag-list-slider">
            <MediaQuery maxWidth={sizes.narrowest}>
                <div className="tag-list-scroll-narrowest">
                    {
                        data.map( elem => {
                            return <TagData data={elem} isLimit={isLimit} limit={selectLimit} />
                        })
                    }
                </div>
            </MediaQuery>
            <MediaQuery minWidth={sizes.narrowest}>
            </MediaQuery>
        </section>
    )
}

export default TagSlider;