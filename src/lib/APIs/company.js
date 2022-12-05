import { M_CLIENT } from "./client";

export const getActiveCompany = () => M_CLIENT.get("/companies");