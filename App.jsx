import React from 'react';

import { NativeModules, StatusBar } from 'react-native';
import Navigator from './src/screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Orientation from 'react-native-orientation-locker';
import codePush from 'react-native-code-push';
import { SafeAreaView } from 'react-native-safe-area-context';
function App() {
  const deviceLanguage = NativeModules.I18nManager.localeIdentifier; // Android

  console.log('deviceLanguage', deviceLanguage);

  Orientation.lockToPortrait();

  return (
    
    <Provider store={store}>
        
      <StatusBar barStyle="default" backgroundColor="#242526" />
      <Navigator />
    </Provider>
   
  );
}

export default codePush(App);
