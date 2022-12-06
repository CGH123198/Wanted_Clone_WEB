import { combineReducers } from "redux";
import Loading from './loading';
import MatchedPositions from './matchedPositions';
import { matchedPositionsSaga } from "../actions/matchedPositions";

import ActiveCompany from './activeCompany';
import { activeCompanySaga } from "../actions/activeCompany";

import SearchPosition from "./searchPosition";
import { searchPositionSaga } from "../actions/searchPosition";

import IdExistence from "./idExistence";
import { IdExistenceSaga } from "../actions/idExistence";

import Auth from './auth';
import { authSaga } from '../actions/auth';

import User from './user';
import { userSaga } from '../actions/user';

import { all } from 'redux-saga/effects';

const RootReducer = combineReducers({
    loading: Loading,
    matchedPositions: MatchedPositions,
    activeCompany: ActiveCompany,
    searchPosition: SearchPosition,
    idExistence: IdExistence,
    auth: Auth,
    user: User
})

export function* rootSaga() {
    yield all([ 
        matchedPositionsSaga(), 
        activeCompanySaga(), 
        searchPositionSaga(),
        IdExistenceSaga(),
        authSaga(),
        userSaga(),
    ]);
}


export default RootReducer