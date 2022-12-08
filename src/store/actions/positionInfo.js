import{ createAction } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../sagas/createRequestSaga';
import * as positionAPI from '../../lib/APIs/positions';

export const [
    POSITION_INFO, POSITION_INFO_SUCCESS, POSITION_INFO_FAILURE
] = createRequestActionTypes('position/POSITION_INFO');

export const getPositionInfo = createAction(
    POSITION_INFO,
    positionId => positionId
)

export const getPositionInfoSaga = createRequestSaga(POSITION_INFO, positionAPI.getPositionInfo);