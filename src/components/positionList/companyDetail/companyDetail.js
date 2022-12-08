import './companyDetail.scss';
import PositionList from './positionList/positionList';
import CompanyTagList from './companyTagList.js/companyTagList';
import CompanyIntro from './companyIntro/companyIntro';
import CompanyNews from './companyNews/companyNews';

const CompanyDetail = ({data}) => {
    return(
        <div className="company-detail-innerwrapper">
            <CompanyTagList data={data} />
            <div className="company-detail-content-column">
                <PositionList data={data}/>
                <CompanyIntro data={data} />
                <CompanyNews  data={data} />
            </div>
        </div>
    )
}

export default CompanyDetail;