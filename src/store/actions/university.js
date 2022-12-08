import { createAction } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../sagas/createRequestSaga";
import * as universityAPI from '../../lib/APIs/university'

export const [
    SEARCH_UNIVERSITY,
    SEARCH_UNIVERSITY_SUCCESS,
    SEARCH_UNIVERSITY_FAILURE
] = createRequestActionTypes('university/SEARCH_UNIVERSITY');

export const searchUniversityAction = createAction(
    SEARCH_UNIVERSITY,
    value => value
)

export const searchUniversitySaga = createRequestSaga(
    SEARCH_UNIVERSITY,
    universityAPI.getSearchUniversity
)