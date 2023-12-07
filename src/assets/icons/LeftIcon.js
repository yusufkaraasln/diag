import React from 'react';
import { SvgXml } from 'react-native-svg';

const LeftIcon = () => {
  const xml = `<svg width="18" height="22" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5879 28.1758L3 15.5879L15.5879 3" fill="#2F1010" fill-opacity="0.01"/>
    <path d="M15.5879 28.1758L3 15.5879L15.5879 3" stroke="white" stroke-width="4.19596" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

  return <SvgXml xml={xml} />;
};

export default LeftIcon;
