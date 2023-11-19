import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import GoogleSigninOption from './GoogleSigninOption';
import GuestSigninOption from './GuestSigninOption';
import { useSelector } from 'react-redux';

const SigninOptions = () => {
  const user = useSelector((state) => state.auth);

  return (
    <View
      style={{
        gap: 20,
        width: Dimensions.get('window').width * 0.8
      }}>
      <Text style={{ textAlign: 'center', color: '#fff' }}>Sign-in with</Text>

      <GoogleSigninOption />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <View
          style={{
            width: Dimensions.get('window').width * 0.7,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#fff' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: '#fff' }}>or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#fff' }} />
        </View>
      </View>
      <GuestSigninOption />
    </View>
  );
};

export default SigninOptions;
