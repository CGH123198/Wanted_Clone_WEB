import SearchResult from "./searchResult";
import data from './searchResult.json';
import { useState } from 'react';

const SearchResultContainer = () => {
    const [endNum, setEndNum] = useState(12);
    //무한 스크롤 관리를 위한 state, 

    return (
        <SearchResult data={data} endNum={endNum} />
    )
}

export default SearchResultContainer;