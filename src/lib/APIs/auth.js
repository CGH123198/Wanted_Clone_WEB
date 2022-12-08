import { K_CLIENT, M_CLIENT } from "./client";

export const checkIdExists = (email_address) => K_CLIENT.post(`/login/id-existence`,{
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


export const postRegisterUser = ({email, password, username, phoneNo}) => {
    return M_CLIENT.post('/users', {
        email: email,
        password: password,
        nickname: username,
        phoneNo: phoneNo,
    })
}