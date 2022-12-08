import { K_CLIENT } from "./client";

export const getSearchUniversity = (value) => K_CLIENT.get('/search/school', {
    params: {
        query: value
    }
}) 