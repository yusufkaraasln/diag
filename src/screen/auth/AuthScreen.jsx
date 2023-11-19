import { View, Text } from 'react-native';
import React from 'react';
import Style from './style';
import SigninOptions from '../../component/auth/SigninOptions';
const AuthScreen = () => {
  return (
    <View style={Style.container}>
      <View style={Style.logo}></View>
      <Text style={Style.title}>Welcome To Diagno</Text>
      <SigninOptions/>
    </View>
  );
};

export default AuthScreen;
