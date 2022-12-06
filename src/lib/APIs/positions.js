import { K_CLIENT } from './client';


export const  fourCardMatchedJob = () => {
        return K_CLIENT.get('/positions-list/', {
            params: {
                locations: "all",
                offset: "0",
                job_sort: "compensation_order",
                years: "0"
            }
        });
}

export const searchResultPosition = ({jobGroupId, jobId}) => {
    if(jobGroupId === "0") {
        return K_CLIENT.get(`/positions-list`, {
            params: {
                locations: "all",
                offset: 0
            }
        })
    }

    if(jobId === "0") {
        return K_CLIENT.get(`/positions-list/${jobGroupId}`, {
            params: {
                locations: "all",
                offset: 0
            }
        })
    }

    return K_CLIENT.get(`/positions-list/${jobGroupId}/${jobId}`, {
        params: {
            locations: "all",
            offset: 0
        }
    })
}