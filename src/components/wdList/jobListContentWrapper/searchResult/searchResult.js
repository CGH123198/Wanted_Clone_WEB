import './searchResult.scss';
import FourCardData from '../../../common/fourCardCarousel/fourCardData';

const SearchResult = ({ data, error, auth, user }) => {

    return(
        <div className="search-result-list-container">
            <ul className="search-result-list">
                {   
                    data &&
                    data.map( elem => 
                        <li>
                            <FourCardData
                                user={user} 
                                data={elem} 
                                auth={auth} 
                                className="search-result-data" 
                            />
                        </li>    
                    )
                }
                <div></div>
            </ul>
        </div>
    )
}

export default SearchResult;