import { View, Text, Image } from 'react-native';
import React from 'react';
import Style from './style';
import SigninOptions from '../../component/auth/SigninOptions';
import { useTranslation } from 'react-i18next';
const AuthScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={Style.container}>
      <View style={Style.logo}>
        <Image style={Style.logo} source={require('../../assets/icons/Dg.png')} />
      </View>
      <Text style={Style.title}>{t("welcome_title")}</Text>
      <SigninOptions />
    </View>
  );
};

export default AuthScreen;
