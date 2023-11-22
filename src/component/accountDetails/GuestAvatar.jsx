import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const GuestAvatar = () => {
  return (
    <Text
      style={{
        textAlign: 'center',
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        fontSize: Dimensions.get('window').width * 0.08,
        borderRadius: Dimensions.get('window').width,
        backgroundColor: '#fff',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: '#242526'
      }}>
      G
    </Text>
  );
};

export default GuestAvatar;
