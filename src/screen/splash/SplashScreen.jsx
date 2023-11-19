import { View, Text } from 'react-native';
import React from 'react';
import LoadingIcon from '../../assets/icons/LoadingIcon';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <LoadingIcon width={50} height={50} color={'#00FFD1'} />
    </View>
  );
};

export default SplashScreen;
