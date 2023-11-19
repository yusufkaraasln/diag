import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/auth';
import { resetUserDetails } from '../redux/slices/userDetails';

const HomeScreen = () => {
  const user = useSelector((state) => state.auth);

  const user_details = useSelector((state) => state.userDetails);
  console.log('user_details', user_details);

  const dispatch = useDispatch();

  async function signOut() {
    try {
      await GoogleSignin.signOut();
      dispatch(logout());
      dispatch(resetUserDetails())
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setEmail(user.email);
  //     } else {
  //       setEmail('No user found');
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{user?.user?.name}</Text>
      <Button title="Sign Out" onPress={signOut}></Button>
    </View>
  );
};

export default HomeScreen;
