import { K_CLIENT } from "./client";

export const checkIdExists = (email_address) => K_CLIENT.post(`/login/idExistence`,{
    email: email_address, 
},
{ 
    header: { "Content-Type": "application/x-www-form-urlencoded" } 
})

export const loginRequest = ({email_address, password}) => {
    return K_CLIENT.post(`/login`,{
        email: email_address,
        password: password
    },
    {  
        header: { "Content-Type": "application/x-www-form-urlencoded" }
    })
}