import { FETCHING_PHOTOS, FETCHING_SUCCESS, FETCHING_FAIL } from './constants';
import { put, takeEvery } from 'redux-saga/effects';
import { getPhotos } from './api';

function* fetchPhotos () {
    try {
        const data = yield getPhotos();
        yield put({ type: FETCHING_SUCCESS, data });
    } catch (e) {
        yield put({ type: FETCHING_FAIL });
    }
}

function* dataSaga () {
    yield takeEvery(FETCHING_PHOTOS, fetchPhotos);
}

export default dataSaga;