import FETCH_USER from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    users: []
  });

function fetchUserReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return state.set('users', fromJS(action.payloads));
        default:
            return state;
    }
}

export default fetchUserReducer;