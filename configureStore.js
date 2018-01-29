import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import dataSaga from './src/saga';
import reducers from './src/reducers';

const sagaMiddleWare = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
    sagaMiddleWare.run(dataSaga);
    return store;
}