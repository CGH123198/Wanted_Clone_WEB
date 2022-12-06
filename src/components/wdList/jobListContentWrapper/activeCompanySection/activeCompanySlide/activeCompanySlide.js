import MediaQuery from "react-responsive";
import { sizes } from "../../../../../lib/styles/mediaQuery";
import './activeCompanySlide.scss';

import data from '../activeCompanyData/activeCompanyData.json';

import { useEffect } from 'react';
import { getActiveCompany } from "../../../../../store/actions/activeCompany";
import ActiveCompanyData from "../activeCompanyData/activeCompanyData";
import { useSelector, useDispatch } from "react-redux";

const ActiveCompanySlide = () => {
    const dispatch = useDispatch();
    const { activeCompany, loading, error} = useSelector(({ activeCompany, loading}) => ({
        activeCompany: activeCompany.activeCompany,
        loading: loading['activeCompany/ACTIVE_COMPANY'],
        error: activeCompany.error,
    }))

    useEffect( () => {
        dispatch(getActiveCompany());
    }, [dispatch]);


    return (
        <div className="active-company-slide-wrapper">
            <MediaQuery maxWidth={sizes.narrowest}>
                <h3 className="active-company-title-style">적극 채용 중인 회사</h3>
            </MediaQuery>
            <div className="active-company-slide">
                <div className="active-company-slide-list">
                    {
                        activeCompany &&
                        activeCompany.map( elem => {
                            return <ActiveCompanyData 
                                       data={elem} 
                                       loading={loading} 
                                       error={error}
                                    />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ActiveCompanySlide;