import CompanyHeader from "../companyHeader/companyHeader";
import CompanyDetail from '../companyDetail/companyDetail';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCompanyInfo } from "../../../store/actions/companyInfo";

const CompanyAllContainer = () => {
    const dispatch = useDispatch();
    const { companyId } = useParams();
    const { companyInfo, error } = useSelector( ({ companyInfo }) => ({
        companyInfo: companyInfo.companyInfo,
        error: companyInfo.error,
    }))


    useEffect( () => {
        dispatch(getCompanyInfo(companyId));
    }, [companyId]);

    return (
        <>
            <CompanyHeader data={companyInfo}/>
            <CompanyDetail data={companyInfo} />            
        </>
    )
}

export default CompanyAllContainer;