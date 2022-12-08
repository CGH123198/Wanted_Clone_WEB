import { K_CLIENT } from "./client";

export const getEventByTagId = (tagId) => {
    return K_CLIENT.get('/events', {
        params: { 
            tagId: tagId,
            added: 0
        }
    })
} 

export const getEventByTagIdAdded = (tagId) => {
    return K_CLIENT.get('events', {
        params: {
            tagId: tagId,
            added: 1
        }
    })
}