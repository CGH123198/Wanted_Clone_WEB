import styled from "styled-components"

const ApplyBtn = styled.div`
    order: 0;
    flex: 1 1;
    align-self: auto;

    &>button {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        background-color: #36f;
        border-color: #36f;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        color: #fff;
        text-align: center;
    }
`;

const ApplyButton = () => {
    return (
        <ApplyBtn className="apply-button">
            <button type="button">
                지원하기
            </button>
        </ApplyBtn>
    )
}

export default ApplyButton;