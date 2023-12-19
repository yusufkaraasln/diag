import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/auth';
import { appleServerAuth, googleAuth } from '../../service/auth';
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
import { firebase } from '@react-native-firebase/auth';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
GoogleSignin.configure({
  webClientId: FIREBASE_WEB_CLIENT_ID
});

const AppleSigninOption = ({ googleLoading, setGoogleLoading, guestLoading, setGuestLoading }) => {
  // const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  /*  async function onGoogleButtonPress() {
    try {
      // setLoading(true);
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      setGoogleLoading(true);

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
      // setLoading(false);
      setGoogleLoading(false);
    }
  }

  */

  const onAppleButtonPress = async () => {
    // 1). start a apple sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    });

    // 2). if the request was successful, extract the token and nonce
    const { identityToken, nonce } = appleAuthRequestResponse;

    // can be null in some scenarios
    if (identityToken) {
      // 3). create a Firebase `AppleAuthProvider` credential
      const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);

      // 4). use the created `AppleAuthProvider` credential to start a Firebase auth request,
      //     in this example `signInWithCredential` is used, but you could also call `linkWithCredential`
      //     to link the account to an existing user
      const userCredential = await firebase.auth().signInWithCredential(appleCredential);

      // user is now signed in, any Firebase `onAuthStateChanged` listeners you have will trigger
       setGoogleLoading(true)

       const credentials = {
           uid: userCredential.user.uid,
           email: userCredential.user.email
       }

       const res = await appleServerAuth(credentials)


       if (res.success) {
        dispatch(loginSuccess(res.data));
        dispatch(setAge(res.data.user.user_details.age));
        dispatch(setWeight(res.data.user.user_details.weight));
        dispatch(setTall(res.data.user.user_details.tall));
        dispatch(setSex(res.data.user.user_details.sex));
        dispatch(setOngoingDiseases(res.data.user.user_details.ongoing_diseases));
        dispatch(setBeforeDiseases(res.data.user.user_details.before_diseases));
        await AsyncStorage.setItem('token', res.data.token);

        console.log(res.data);
      } else {
        console.log('res.message', res.message);
      }
    
    } else {
      // handle this - retry?
    }
    setGoogleLoading(false)
  };

  

  return (
    <TouchableOpacity
      disabled={guestLoading}
      onPress={guestLoading ? null : onAppleButtonPress}
      activeOpacity={0.8}>
      <View>
        {appleAuth.isSupported && (
          <>
            {googleLoading ? (<View
             style={{
               backgroundColor: 'white',
               alignItems: 'center',
               height: 60,
               justifyContent: 'center',
               borderRadius: 50
             }}>
               <LoadingIcon color={'#242526'} loading={googleLoading} />  
           </View>
            ) : (
              <AppleButton
                cornerRadius={50}
                style={{ height: 60 }}
                buttonStyle={AppleButton.Style.WHITE}
                buttonType={AppleButton.Type.CONTINUE}
                onPress={()=>{}}
              />
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppleSigninOption;
