import CompanyHeader from "../companyHeader/companyHeader";
import CompanyDetail from '../companyDetail/companyDetail';

import CompanyData from '../data.json';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const CompanyAllContainer = () => {
    const [data, setData] = useState(null);
    const { companyId } = useParams();
    useEffect( () => {
        setData(CompanyData.find(elem => elem.companyId === companyId));    
    }, [companyId])

    return (
        <>
            <CompanyHeader data={data}/>
            <CompanyDetail data={data}/>            
        </>
    )
}

export default CompanyAllContainer;