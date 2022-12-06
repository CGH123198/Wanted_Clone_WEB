import { M_CLIENT, K_CLIENT } from "./client";

export const getActiveCompany = () => M_CLIENT.get("/companies");
