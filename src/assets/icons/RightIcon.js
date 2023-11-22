import { View, Text } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const RightIcon = ({ color }) => {
  const xml = `<svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.65803 3.00012L15.9126 15.9128L2.99992 28.1673" fill="${color}" fill-opacity="0.01"/>
    <path d="M3.65803 3.00012L15.9126 15.9128L2.99992 28.1673" stroke="${color}" stroke-width="4.19596" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  return <SvgXml xml={xml} width="19" height="20" />;
};

export default RightIcon;
