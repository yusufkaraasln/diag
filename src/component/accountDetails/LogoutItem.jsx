import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import RightIcon from '../../assets/icons/RightIcon';

const LogoutItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Dimensions.get('window').width * 0.05
      }}>
      <Text
        style={{
          color: '#fff',
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
        <RightIcon color={'#fff'} />
      </View>
    </TouchableOpacity>
  );
};

export default LogoutItem;
