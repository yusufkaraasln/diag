import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const SingleDiseaseCard = ({ title, content, listed }) => {
  const capitalizeFirstLetter = (string) => {
    const trimmed = string?.trim();

    return trimmed?.charAt(0).toUpperCase() + trimmed?.slice(1);
  };

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          color: '#00FFD1',
          padding: Dimensions.get('window').height * 0.01,
          fontSize: Dimensions.get('window').width * 0.04
        }}>
        {title}
      </Text>
      {listed ? (
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: Dimensions.get('window').height * 0.005,
            paddingLeft: Dimensions.get('window').height * 0.01
          }}>
          {content.split(',').map((item, key) => (
            <Text
              key={key}
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: '300',
                fontSize: Dimensions.get('window').width * 0.04,
                lineHeight: Dimensions.get('window').height * 0.03
              }}>
              <Text style={{ color: '#fff' }}>{`   \u2022   `}</Text>
              {` ${capitalizeFirstLetter(item)}`}
            </Text>
          ))}
        </View>
      ) : (
        <Text
          style={{
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'justify',
            overflow: 'scroll',
            fontWeight: '300',
            fontSize: Dimensions.get('window').width * 0.04,
            lineHeight: Dimensions.get('window').height * 0.03,
            paddingHorizontal: Dimensions.get('window').height * 0.01
          }}>
          {content}
        </Text>
      )}
    </View>
  );
};

export default SingleDiseaseCard;
