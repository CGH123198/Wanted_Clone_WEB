import styled from 'styled-components';
import { sizes } from '../../../lib/styles/mediaQuery';

const PaddingWrap = styled.div`
    height: 0;

    @media screen and (max-width: ${sizes.narrower}px) {
        height: 60px;
    }

`;

const Padding = () => {
    return (
        <PaddingWrap className="header-for-padding" />
    )
}

export default Padding;