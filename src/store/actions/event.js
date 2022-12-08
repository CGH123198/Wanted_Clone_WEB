import { createAction } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../sagas/createRequestSaga';
import * as eventAPI from '../../lib/APIs/event';

export const [
    GET_EVENT_BY_TAG_ID,
    GET_EVENT_BY_TAG_ID_SUCCESS,
    GET_EVENT_BY_TAG_ID_FAILURE
] = createRequestActionTypes('event/GET_EVENT_BY_TAG_ID');

export const [
    GET_EVENT_BY_TAG_ID_ADDED,
    GET_EVENT_BY_TAG_ID_ADDED_SUCCESS,
    GET_EVENT_BY_TAG_ID_ADDED_FAILURE
] = createRequestActionTypes('event/GET_EVENT_BY_TAG_ID_ADDED')

export const getEventByTagIdAction = createAction(
    GET_EVENT_BY_TAG_ID,
    (tagId) => (tagId)
)

export const getEventByTagIdAddedAction = createAction(
    GET_EVENT_BY_TAG_ID_ADDED,
    (tagId) => (tagId)
)

export const getEventByTagIdSaga = createRequestSaga(
    GET_EVENT_BY_TAG_ID,
    eventAPI.getEventByTagId
)

export const getEventByTagIdAddedSaga = createRequestSaga(
    GET_EVENT_BY_TAG_ID_ADDED,
    eventAPI.getEventByTagIdAdded
)