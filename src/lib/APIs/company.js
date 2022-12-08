import { M_CLIENT } from "./client";

export const getActiveCompany = () => M_CLIENT.get("/companies");


export const getCompanyInfo = (companyId) => M_CLIENT.get(`/companies/info/${companyId}`);