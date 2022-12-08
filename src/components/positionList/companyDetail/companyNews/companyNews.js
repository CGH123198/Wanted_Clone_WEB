import './companyNews.scss';

const CompanyNews = ({data}) => {
    return (
        <div className="company-news">
            <h3>이 회사의 뉴스</h3>
            <div className="company-news-list">
                {
                    data &&
                    data.companyNews.map( elem => {
                        return(
                            <a href={elem.newsLink} target="_blank" className="company-news-item" rel="noopener noreferrer">
                                <h4>{elem.newsName}</h4>
                                <p>{elem.newspaperLink}</p>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )    
}


export default CompanyNews;