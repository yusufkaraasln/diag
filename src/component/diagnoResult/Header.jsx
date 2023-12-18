import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ translateY, navigation, backAction }) => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        alignItems: 'center',
        paddingBottom: Dimensions.get("window").height *0.03,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: Dimensions.get('window').width * 0.06,
          fontWeight: 'bold'
        }}>
        {t('diagno_results')}
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={backAction}>
        <Text
          style={{
            color: '#00FFD1',
            fontSize: Dimensions.get('window').width * 0.045,
            fontWeight: '900'
          }}>
          {t('ok')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
