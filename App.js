import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import fetchUserReducer from './src/reducer'
import FetchUser from './src/index';

import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  fetchUserReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FetchUser/>
      </Provider>
    );
  }
}

export default App;