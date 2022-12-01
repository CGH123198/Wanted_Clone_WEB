import styled from 'styled-components';
import './filterInWdList.scss';
import { sizes } from '../../../../lib/styles/mediaQuery';
import TagSliderContainer from '../tagSlider/tagSliderContainer';

const FilterWrap = styled.div`
    top: 50px;
    margin-bottom: 25px;
    padding-top: 10px;

    @media (max-width: ${sizes.narrowest}px) {
        top: 110px;
        width: 100%;
        padding-bottom: 10px;
    }
`;

const FilterInWdList = () => {
    return (
        <FilterWrap>
            <hr className="joblist-content-divider" />
            <TagSliderContainer />
        </FilterWrap>
    )
}

export default FilterInWdList;