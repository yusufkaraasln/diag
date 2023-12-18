import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const GuestAvatar = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        backgroundColor: '#fff',
        borderRadius: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text
        style={{
          fontSize: Dimensions.get('window').width * 0.08,

          fontWeight: 'bold',
          color: '#242526'
        }}>
        G
      </Text>
    </View>
  );
};

export default GuestAvatar;
