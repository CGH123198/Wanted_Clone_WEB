import './searchResult.scss';
import FourCardData from '../../../common/fourCardCarousel/fourCardData';

const SearchResult = ({ data, endNum }) => {

    return(
        <div className="search-result-list-container">
            <ul className="search-result-list">
                {
                    data && 
                    data.map( elem => 
                        <li><FourCardData data={elem} className="search-result-data" /></li>    
                    )
                }
                <div></div>
                {/** 
                 * 이 엘레멘트가 뷰포트에 들어오면 서버에 추가 데이터 요청 
                 * react-intersection-observer
                */}
            </ul>
        </div>
    )
}

export default SearchResult;