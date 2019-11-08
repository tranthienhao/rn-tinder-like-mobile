import React from 'react';
import {StatusBar} from 'react-native';
import AppRoot from './src/Root';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <AppRoot />
      </Provider>
    </>
  );
};

export default App;
