import SearchResult from "./searchResult";
import data from './searchResult.json';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
//:jobgroupId/:jobId
import { getSearchResultPosition } from '../../../../store/actions/searchPosition';
import { useSelector, useDispatch } from "react-redux";



const SearchResultContainer = () => {
    const { jobgroupId, jobId } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    
    const { searchPosition, loading, error } = useSelector( ({ searchPosition, loading }) => ({
        searchPosition: searchPosition.searchPosition,
        loading: loading['searchPosition/SEARCH_POSITIN'],
        error: searchPosition.error
    }))
    
    useEffect( () => {
        dispatch(getSearchResultPosition(jobgroupId, jobId));
    }, [location.pathname, dispatch])
    
    return (
        <SearchResult data={searchPosition} error={error} loading={loading} />
    )
}

export default SearchResultContainer;