import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { guestAuth } from '../../service/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingIcon from '../../assets/icons/LoadingIcon';

const GuestSigninOption = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const onGuestSignin = async () => {
    setLoading(true);
    const res = await guestAuth();

    if (res.success) {
      dispatch(loginSuccess(res.data));
      await AsyncStorage.setItem('token', res.data.token);
    } else {
      console.log('res.message', res.message);
    }
    setLoading(false);
  };

  return (
    <TouchableOpacity onPress={onGuestSignin} activeOpacity={0.8}>
      <View
        style={{
          backgroundColor: '#00FFD1',
          alignItems: 'center',
          paddingVertical: 18,
          height: 60,
          borderRadius: 50
        }}>
        {loading ? (
          <LoadingIcon color={'#242526'} loading={loading} />
        ) : (
          <Text style={{ fontWeight: '900' }}>As a Guest</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GuestSigninOption;
