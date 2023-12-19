import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const GuestAvatar = (props ) => {
   
  const user = useSelector((state) => state.auth?.user);

  
  
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
        {
          user.auth_type == "guest" ? "G": 
          user.email.slice(0,1).toUpperCase()
        }
      </Text>
    </View>
  );
};

export default GuestAvatar;
