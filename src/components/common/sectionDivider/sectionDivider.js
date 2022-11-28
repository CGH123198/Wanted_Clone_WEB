import styled from 'styled-components';

const SectionDividerWrap = styled.div`
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.42857143;
    background-color: #f8f8fa;
    width: 90%;

    & hr {
        height: 1px;
        margin: 0;
        border: none;
        flex-shrink: 0;
        background-color: #ececec;
    }   

    @media screen and (min-width: 1200px) {
        max-width: 1100px;
    }
`;

const SectionDivider = () => {
    return (
        <SectionDividerWrap>
            <hr />
        </SectionDividerWrap>
    )
}

export default SectionDivider;