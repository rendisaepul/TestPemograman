import { FETCHING_PHOTOS, FETCHING_SUCCESS, FETCHING_FAIL } from '../constants';

const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export default function photosReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_PHOTOS:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case FETCHING_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state;
    }
}