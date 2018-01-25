import FETCH_USER from './constants';

export function fetchUser() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            console.log('response', res.data);
            const payloads = res.data;
            dispatch({ type: FETCH_FEEDS, payloads });
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
}