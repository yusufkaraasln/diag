import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StepBar = () => {
  const configuration_steps = useSelector((state) => state.auth?.user?.configuration_steps);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        
        gap: 11
      }}>
      {[...Array(configuration_steps.status.total)].map((e, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            height: 10,
            borderRadius: 15,
            backgroundColor: i < configuration_steps.status.current + 1 ? '#00FFD1' : '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      ))}
    </View>
  );
};

export default StepBar;
