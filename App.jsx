import React from 'react';

import { NativeModules, StatusBar } from 'react-native';
import Navigator from './src/screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  const deviceLanguage = NativeModules.I18nManager.localeIdentifier; // Android

  console.log('deviceLanguage', deviceLanguage);

  return (
    <Provider store={store}>
      <StatusBar barStyle="default" backgroundColor="#242526" />
      <Navigator />
    </Provider>
  );
}

export default App;
