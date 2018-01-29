import { FETCHING_PHOTOS } from './constants';

export function fetchPhotos() {
    return {
        type: FETCHING_PHOTOS
    };
}