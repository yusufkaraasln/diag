import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const SingleDiseaseCard = ({ title, content }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          color: '#00FFD1',
          fontSize: Dimensions.get('window').width * 0.04
        }}>
        {title}
      </Text>
      <Text
        style={{
          color: 'rgba(255,255,255,0.9)',
          textAlign: 'justify',
        
          overflow: 'scroll',
          fontWeight: '300',
          fontSize: Dimensions.get('window').width * 0.04,
          lineHeight: Dimensions.get('window').height * 0.03,
        }}>
        {content}
      </Text>
    </View>
  );
};

export default SingleDiseaseCard;
