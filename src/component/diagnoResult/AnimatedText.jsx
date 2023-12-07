import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Easing, TouchableOpacity } from 'react-native';

const AnimatedText = ({ text }) => {
  const [innerText, setInnerText] = useState('Please wait...');
  const animation = useRef(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();

    setTimeout(() => {
      setInnerText(text);
      Animated.timing(animation.current, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear
      }).start();
    }, 301);
  }, [text]);

  return (
    <Animated.Text
      style={{
        opacity: animation.current,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 1,
        lineHeight: 30
      }}>
      {innerText}
    </Animated.Text>
  );
};

export default AnimatedText;
