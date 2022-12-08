import { M_CLIENT } from "./client";

export const getUserInfo = ({jwt_token, userId}) => {
    return M_CLIENT.get(`/users/${userId}`,{
        headers: { 
            'Content-type': 'application/json',
            'x-access-token': jwt_token
        }
    })
}

export const postBookMarkInfo = ({jwt_token, userId, positionId}) => {
    return M_CLIENT.post(`/users/bookmarks`, {
        positionId: positionId,
        userId: userId
    },{
        headers: {
            'Content-type': 'application/json',
            'x-access-token': jwt_token
        }
    })
}

export const getBookMarkInfo = ({jwt_token, userId}) => {
    return M_CLIENT.get(`/users/${userId}/bookmarks`, {
        headers: {
            'Content-type': 'application/json',
            'x-access-token': jwt_token
        }
    })
}

export const patchPhoneNo = ({jwt_token, userId, phoneNo}) => M_CLIENT.patch(`/users/${userId}`, {
        phoneNo: phoneNo
    },
    {
        headers: {
            'Content-type': 'application/json',
            'x-access-token': jwt_token
        }
    }
);

export const patchUserName = ({jwt_token, userId, userName}) => M_CLIENT.patch(`/users/${userId}`, {
        nickname: userName
    },
    {
        headers: {
            'Content-type': 'application/json',
            'x-access-token': jwt_token
        }
    }
);

export const patchPassword = ({jwt_token, userId, oldPassword, newPassword}) => M_CLIENT.patch(
    `/users/${userId}/password`,{
        oldPassword: oldPassword,
        newPassword: newPassword
    },
    {
        headers: {
            'Content-type': 'application/json',
            'x-access-token': jwt_token
        }
    }
);