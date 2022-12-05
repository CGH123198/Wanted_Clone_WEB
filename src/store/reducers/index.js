import { combineReducers } from "redux";
import Loading from './loading';
import Positions from './positions';
import { positionsSaga } from "../actions/positions";

import { all } from 'redux-saga/effects';

const RootReducer = combineReducers({
    loading: Loading,
    positions: Positions,
})

export function* rootSaga() {
    yield all([ positionsSaga() ]);
}


export default RootReducer