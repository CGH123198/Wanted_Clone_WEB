import tag from './tags.json';
import TagSlider from './tagSlider';

const TagSliderContainer = ({ scrollPosition }) => {
    return (
        <TagSlider data={tag} scrollPosition={scrollPosition} />
    )
}

export default TagSliderContainer;