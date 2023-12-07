import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const DiagnoStartStepbar = ({ step }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,

        gap: 11
      }}>
      {[...Array(2)].map((e, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            height: 10,
            borderRadius: 15,
            backgroundColor: i + 1 <= step ? '#00FFD1' : '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      ))}
    </View>
  );
};

export default DiagnoStartStepbar;
