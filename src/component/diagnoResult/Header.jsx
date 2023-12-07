import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = (translateY, navigation, backAction) => {
  const { t } = useTranslation();

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#242526',
        width: '100%',

        height: 64,
        transform: [{ translateY: translateY }],
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1
      }}>
      {
        <View
          style={{
            width: Dimensions.get('window').width * 0.9,
            alignItems: 'center',
            paddingVertical: Dimensions.get('window').height * 0.01,
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
      }
    </Animated.View>
  );
};

export default Header;
