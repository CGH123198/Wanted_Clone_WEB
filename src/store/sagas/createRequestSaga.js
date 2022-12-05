import { call, put, putResolve } from 'redux-saga/effects';
import { isLoadingStart, isLoadingEnd } from '../actions/loading';


export const createRequestActionTypes = (type) => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [type, SUCCESS, FAILURE];
}

const createRequestSaga = (type, request) => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(isLoadingStart(type));
        try {
            const { data } = yield call(request, action.payload);
            console.log("response.data: ", data)
            yield put({
                type: SUCCESS,
                payload: data,
            });
        } catch (e) {
            console.log("error: ", e)
            yield put({
                type: FAILURE,
                payload: e,
            })
        }
        yield putResolve(isLoadingEnd(type));
    }
}

export default createRequestSaga;