import './companyNews.scss';

const CompanyNews = ({data}) => {
    return (
        <div className="company-news">
            <h3>이 회사의 뉴스</h3>
            <div className="company-news-list">
                {
                    data &&
                    data.news.map( elem => {
                        return(
                            <a href={elem.link} target="_blank" className="company-news-item" rel="noopener noreferrer">
                                <h4>{elem.title}</h4>
                                <p>{elem.source}</p>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )    
}


export default CompanyNews;