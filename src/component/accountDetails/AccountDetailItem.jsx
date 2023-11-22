import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import RightIcon from '../../assets/icons/RightIcon';
import { useNavigation } from '@react-navigation/native';

const AccountDetailItem = ({ title, value, pushTo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(pushTo);
      }}
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
            fontSize: Dimensions.get('window').width * 0.03,
            fontWeight: 'bold'
          }}>
          {value}
        </Text>
        <RightIcon color={'#00FFD1'} />
      </View>
    </TouchableOpacity>
  );
};

export default AccountDetailItem;
