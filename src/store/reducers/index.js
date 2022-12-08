import { combineReducers } from "redux";
import Loading from './loading';

import CompanyInfo from './companyInfo';
import ActiveCompany from './activeCompany';
import { companySaga } from "../sagas/companySaga";

import PositionInfo from "./positionInfo";
import MatchedPositions from './matchedPositions';
import SearchPosition from "./searchPosition";
import { positionSaga } from "../sagas/positionSaga";

import IdExistence from "./idExistence";
import { IdExistenceSaga } from "../sagas/idExistenceSaga";

import Auth from './auth';
import { authSaga } from '../sagas/authSaga';

import User from './user';
import { userSaga } from '../sagas/userSaga';

import BookMark from "./bookMark";
import { bookMarkSaga } from "../sagas/bookMarkSaga";

import BookMarkList from "./bookMarkList";
import { bookMarkListSaga } from "../sagas/bookMarkListSaga";

import UserInfo from './userInfo';
import { userInfoSaga } from "../sagas/userInfoSaga";

import Event from './event';
import { eventSaga } from "../sagas/eventSaga";

import Register from "./register";
import { registerSaga } from "../sagas/registerSaga";

import UniverSity from "./university";
import { universitySaga } from "../sagas/universitySaga";

import { all } from 'redux-saga/effects';

const RootReducer = combineReducers({
    loading: Loading,
    matchedPositions: MatchedPositions,
    activeCompany: ActiveCompany,
    companyInfo: CompanyInfo,
    searchPosition: SearchPosition,
    idExistence: IdExistence,
    auth: Auth,
    user: User,
    bookMark: BookMark,
    positionInfo: PositionInfo,
    userInfo: UserInfo,
    bookMarkList: BookMarkList,
    event: Event,
    register: Register,
    university: UniverSity
})

export function* rootSaga() {
    yield all([ 
        companySaga(), 
        positionSaga(),
        IdExistenceSaga(),
        authSaga(),
        userSaga(),
        bookMarkSaga(),
        userInfoSaga(),
        bookMarkListSaga(),
        eventSaga(),
        registerSaga(),
        universitySaga()
    ]);
}


export default RootReducer