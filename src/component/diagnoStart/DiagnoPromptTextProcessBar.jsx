import React from 'react';
import { Dimensions, View } from 'react-native';
import { Circle, Svg, Text as SVGText } from 'react-native-svg';
import { useSelector } from 'react-redux';

const DiagnoPromptTextProcessBar = () => {
  const prompt = useSelector((state) => state.startDiagno?.prompt);

  const size = Dimensions.get('window').width * 0.07;
  const strokeWidth = Dimensions.get('window').width * 0.007;

  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - (prompt?.length / 350) * 100;

  const bgColor = '#f2f2f2';

  const pgColor = '#00FFD1';

  const textColor = '#fff';

  const textSize = '10';

  return (
    <View
      style={{
        position: 'absolute',
        right: 0,
        bottom: -Dimensions.get('window').width * 0.01,
        zIndex: 1
      }}>
      <Svg
      opacity={prompt?.length > 0 ? 1 : 0}
        width={size + Dimensions.get('window').width * 0.001}
        height={size + Dimensions.get('window').width * 0.001}>
        <Circle
          stroke={bgColor ? bgColor : '#f2f2f2'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        <Circle
          stroke={pgColor ? pgColor : '#3b5998'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />

        {/* Text */}
        <SVGText
          fontSize={textSize ? textSize : '10'}
          x={size / 2}
          y={size / 2 + (textSize ? textSize / 2 - 1 : 5)}
          textAnchor="middle"
          fill={textColor ? textColor : '#333333'}>
          {prompt?.length}
        </SVGText>
      </Svg>
    </View>
  );
};

export default DiagnoPromptTextProcessBar;
