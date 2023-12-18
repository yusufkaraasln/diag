import { View, Text } from 'react-native';
import React from 'react';
import StepBar from '../../component/userConf/StepBar';
import ContinuesBar from '../../component/userConf/ContinuesBar';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/auth';
import UserInputs from '../../component/userConf/UserInputs';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserConfigurationScreen = () => {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       await GoogleSignin.signOut();
  //       dispatch(logout());
  //       await AsyncStorage.removeItem('token');
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  return (

    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#242526"
    }}
    >
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 20,
        backgroundColor: '#242526'
      }}>
      <StepBar />

      <UserInputs />

      <ContinuesBar />
    </View>
   </SafeAreaView>
  );
};

export default UserConfigurationScreen;
