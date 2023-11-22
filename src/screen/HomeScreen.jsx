import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Text, View, Button, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/auth';
import { resetUserDetails } from '../redux/slices/userDetails';
import MenuIcon from '../assets/icons/MenuIcon';

const HomeScreen = () => {
  const user = useSelector((state) => state.auth);

  const user_details = useSelector((state) => state.userDetails);

  const dispatch = useDispatch();

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

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.06
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('AccountDetails')}>
          <MenuIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
