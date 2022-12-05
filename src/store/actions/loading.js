import { createAction } from 'redux-actions';

export const LOADING_START = 'loading/LOADING_START';
export const LOADING_END = 'loading/LOADING_END';


export const isLoadingStart = createAction(
    LOADING_START,
    ActionType => ActionType
);

export const isLoadingEnd = createAction(
    LOADING_END,
    ActionType => ActionType
);

