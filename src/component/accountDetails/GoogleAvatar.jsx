import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';

const GoogleAvatar = ({ avatar }) => {
  return (
    <Image
      source={{ uri: avatar }}
      style={{
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        borderRadius: Dimensions.get('window').width
      }}
    />
  );
};

export default GoogleAvatar;
