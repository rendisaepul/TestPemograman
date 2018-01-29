import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import Photos from './src/index';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Photos />
      </Provider>
    )
  }
}

export default App;