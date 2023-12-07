import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { guestAuth } from '../../service/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingIcon from '../../assets/icons/LoadingIcon';
import {
  setAge,
  setBeforeDiseases,
  setOngoingDiseases,
  setSex,
  setTall,
  setWeight
} from '../../redux/slices/userDetails';
import { useTranslation } from 'react-i18next';

const GuestSigninOption = ({ googleLoading, setGoogleLoading, guestLoading, setGuestLoading }) => {
  const dispatch = useDispatch();

  const onGuestSignin = async () => {
    // setLoading(true);
    setGuestLoading(true);
    const res = await guestAuth();

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
    // setLoading(false);
    setGuestLoading(false);
  };

  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={googleLoading ? null : onGuestSignin} activeOpacity={0.8}>
      <View
        style={{
          backgroundColor: '#00FFD1',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 18,
          height: 60,
          borderRadius: 50
        }}>
        {guestLoading ? (
          <LoadingIcon color={'#242526'} loading={guestLoading} />
        ) : (
          <Text style={{ fontWeight: '900', color: '#242526' }}>{t('as_a_guest')}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GuestSigninOption;
