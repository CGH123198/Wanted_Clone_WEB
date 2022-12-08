import SearchResult from "./searchResult";
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
//:jobgroupId/:jobId
import { getSearchResultPosition } from '../../../../store/actions/searchPosition';
import { useSelector, useDispatch } from "react-redux";



const SearchResultContainer = () => {
    const { jobgroupId, jobId } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    
    const { searchPosition, loading, error, auth, user } = useSelector( ({ searchPosition, loading, auth, user }) => ({
        searchPosition: searchPosition.searchPosition,
        loading: loading['searchPosition/SEARCH_POSITIN'],
        error: searchPosition.error,
        auth: auth.auth,
        user: user.user,
    }))
    
    useEffect( () => {
        dispatch(getSearchResultPosition(jobgroupId, jobId));
    }, [location.pathname, dispatch])
    
    return (
        <SearchResult 
            user={user}
            data={searchPosition} 
            error={error} 
            loading={loading} 
            auth={auth}
        />
    )
}

export default SearchResultContainer;