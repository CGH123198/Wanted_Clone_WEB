import { M_CLIENT } from "./client";

export const getUserInfo = ({jwt_token, userId}) => {
    return M_CLIENT.get(`/users/${userId}`,{
        headers: { 
            'Content-type': 'application/json',
            'x-access-token': jwt_token
        }
    })
}