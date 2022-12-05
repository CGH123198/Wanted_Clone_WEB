import { K_CLIENT } from './client';


export const  fourCardMatchedJob = () => {
        return K_CLIENT.get('/positions-list/1/1', {
            params: {
                location: "all"
            }
        });
}