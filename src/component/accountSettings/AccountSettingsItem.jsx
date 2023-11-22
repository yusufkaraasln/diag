import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const AccountSettingsItem = ({ title, value }) => {
  

  return (
    <View
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Dimensions.get('window').width * 0.05
      }}>
      <Text
        style={{
          color: '#00FFD1',
          fontSize: Dimensions.get('window').width * 0.04
        }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: Dimensions.get('window').width * 0.15
        }}>
        <Text
          style={{
            color: '#fff',
            textTransform: 'capitalize',
          }}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default AccountSettingsItem;
