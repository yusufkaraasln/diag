import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/splash/SplashScreen';

const SplashRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default SplashRoute;
