import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './auth/AuthScreen';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserByToken } from '../service/auth';
import { setToken, setUser } from '../redux/slices/auth';
import SplashScreen from './splash/SplashScreen';
import SplashRoute from '../routes/SplashRoute';
import AppRoute from '../routes/app';
import { setAge, setBeforeDiseases, setOngoingDiseases, setSex, setTall, setWeight } from '../redux/slices/userDetails';

function Navigator() {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      const res = await getUserByToken(token);

      if (res?.success) {
        dispatch(setUser(res.data));
        dispatch(setAge(res.data.user_details.age));
        dispatch(setWeight(res.data.user_details.weight));
        dispatch(setTall(res.data.user_details.tall));
        dispatch(setSex(res.data.user_details.sex));
        dispatch(setOngoingDiseases(res.data.user_details.ongoing_diseases));
        dispatch(setBeforeDiseases(res.data.user_details.before_diseases));
        dispatch(setToken(token));
      } else {
        console.log('res.message', res.message);
      }
      setLoading(false);
    })();
  }, []);


  return <NavigationContainer>{loading ? <SplashRoute /> : <AppRoute />}</NavigationContainer>;
}

export default Navigator;
