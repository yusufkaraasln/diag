import { View, Text } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const SearchIcon = () => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
    <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  return <SvgXml width={30} height={30} xml={xml} />;
};

export default SearchIcon;
