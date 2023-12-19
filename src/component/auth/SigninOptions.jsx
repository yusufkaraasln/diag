import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import GoogleSigninOption from './GoogleSigninOption';
import GuestSigninOption from './GuestSigninOption';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AppleSigninOption from './AppleSigninOption';

const SigninOptions = () => {
  const { t } = useTranslation();

  const [googleLoading, setGoogleLoading] = React.useState(false);
  const [guestLoading, setGuestLoading] = React.useState(false);

  return (
    <View
      style={{
        gap: 20,
        width: Dimensions.get('window').width * 0.8
      }}>
      <Text style={{ textAlign: 'center', color: '#fff' }}>{t('sign_in_with')}</Text>
      {/*

      <GoogleSigninOption
      googleLoading={googleLoading}
      setGoogleLoading={setGoogleLoading}
      guestLoading={guestLoading}
      setGuestLoading={setGuestLoading}
      />
      */}
       <AppleSigninOption
      googleLoading={googleLoading}
      setGoogleLoading={setGoogleLoading}
      guestLoading={guestLoading}
      setGuestLoading={setGuestLoading}
      />
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
            <Text style={{ width: 50, textAlign: 'center', color: '#fff' }}>{t('or')}</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#fff' }} />
        </View>
      </View>
      <GuestSigninOption
        googleLoading={googleLoading}
        setGoogleLoading={setGoogleLoading}
        guestLoading={guestLoading}
        setGuestLoading={setGuestLoading}
      />
    </View>
  );
};

export default SigninOptions;
