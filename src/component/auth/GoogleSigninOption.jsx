import { View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/auth';
import { googleAuth } from '../../service/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GoogleIcon from '../../assets/icons/GoogleIcon';
import LoadingIcon from '../../assets/icons/LoadingIcon';
import { FIREBASE_WEB_CLIENT_ID } from '@env';
import {
  setAge,
  setBeforeDiseases,
  setOngoingDiseases,
  setSex,
  setTall,
  setWeight
} from '../../redux/slices/userDetails';

GoogleSignin.configure({
  webClientId: FIREBASE_WEB_CLIENT_ID
});

const GoogleSigninOption = () => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  async function onGoogleButtonPress() {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const res = await googleAuth(idToken);

      if (res.success) {
        dispatch(loginSuccess(res.data));
        dispatch(setAge(res.data.user.user_details.age));
        dispatch(setWeight(res.data.user.user_details.weight));
        dispatch(setTall(res.data.user.user_details.tall));
        dispatch(setSex(res.data.user.user_details.sex));
        dispatch(setOngoingDiseases(res.data.user.user_details.ongoing_diseases));
        dispatch(setBeforeDiseases(res.data.user.user_details.before_diseases));
        await AsyncStorage.setItem('token', res.data.token);
      } else {
        console.log('res.message', res.message);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableOpacity onPress={onGoogleButtonPress} activeOpacity={0.8}>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          height: 60,
          justifyContent: 'center',
          borderRadius: 50
        }}>
        {loading ? <LoadingIcon color={'#00FFD1'} loading={loading} /> : <GoogleIcon />}
      </View>
    </TouchableOpacity>
  );
};

export default GoogleSigninOption;
