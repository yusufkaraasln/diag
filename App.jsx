import React from 'react';

import { StatusBar } from 'react-native';
import Navigator from './src/screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="default" backgroundColor="#242526" />
      <Navigator />
    </Provider>
  );
}

export default App;
