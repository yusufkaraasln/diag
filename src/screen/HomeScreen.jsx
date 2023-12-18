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
import Stethoscope from '../component/home/Stethoscope';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
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

  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#242526'
      }}>
      <View
        style={{
          width: Dimensions.get('window').width,
          padding: Dimensions.get('window').width * 0.03,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('AccountDetails')}>
          <MenuIcon />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: Dimensions.get('window').width * 0.1
        }}>
        {i18n.language === 'en' ? (
          <Text
            style={{
              color: '#fff',
              fontSize: Dimensions.get('window').width * 0.04
            }}>
            Press stethoscope to begin the{' '}
            <Text
              style={{
                color: '#fff',
                fontSize: Dimensions.get('window').width * 0.05,
                fontWeight: '900'
              }}>
              diagno
            </Text>
          </Text>
        ) : (
          <Text
            style={{
              color: '#fff',
              fontSize: Dimensions.get('window').width * 0.04
            }}>
            <Text
              style={{
                color: '#fff',
                paddingRight: Dimensions.get('window').width * 0.05,
                fontSize: Dimensions.get('window').width * 0.05,
                fontWeight: '900'
              }}>
              diagno
            </Text>
            {t('title')}
          </Text>
        )}
        <Stethoscope />
      </View>
      <View />
    </SafeAreaView>
  );
};

export default HomeScreen;
