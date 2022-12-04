import styled from 'styled-components';

import { useState } from 'react';

const BookMarkBtn = styled.button`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #36f;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    color: #36f;
    text-align: center;

    & svg {
        color: ${ ({mark}) => mark ? "#36f" : "white"};
        stroke: #36f;
        stroke-width: 1.5px;
        margin-right: 8px;
        width: 13;
        height: 17;
    }

    & svg:not(:root) {
        overflow: hidden;
    }
`;

const BookrMarkButton = () => {
    const [mark, setMark] = useState(false);

    const isMarked = () => {
        mark ? setMark(false) : setMark(true);
    }

    return (
        <BookMarkBtn
            onClick={isMarked}
            mark={mark}
        >
            <svg width="13" height="17" viewBox="0 0 13 17" ><defs><path id="bookmarkIconFill" d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"></path></defs><g fill="none" fillRule="evenodd" transform="translate(.188)"><use fill="currentColor" xlinkHref="#bookmarkIconFill"></use></g></svg>
            {
                mark ?
                "북마크 완료" :
                "북마크 하기"
            }
        </BookMarkBtn>
    )
}

export default BookrMarkButton;