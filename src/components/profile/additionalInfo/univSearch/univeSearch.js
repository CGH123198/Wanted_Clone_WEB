import './univeSearch.scss';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UnivSearch = ({onChange, university, search}) => {
    console.log(university)
    return (
        <div className="univ-search-container">
            <div className="univ-search-window">
                <input 
                    type="text" 
                    placeholder="학교 검색" 
                    onChange={onChange}
                    value={search}
                />
                <div className='search-icon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
                { (university && university.length > 0) &&
                    <div className="search-result">
                        <ul>
                            {
                                university.map(elem => <li dangerouslySetInnerHTML={{__html: elem }}></li>)
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default UnivSearch;