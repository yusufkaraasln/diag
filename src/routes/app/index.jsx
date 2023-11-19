import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import HomeScreen from '../../screen/HomeScreen';
import AuthScreen from '../../screen/auth/AuthScreen';
import UserConfigurationScreen from '../../screen/userConfigration';

const AppRoute = () => {
  const Stack = createNativeStackNavigator();
  const user = useSelector((state) => state.auth?.user);
  const configuration_steps = useSelector((state) => state.auth?.user?.configuration_steps);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          {configuration_steps.completed ? (
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen
              options={{ headerShown: false }}
              name="UserConfiguration"
              component={UserConfigurationScreen}
            />
          )}
        </>
      ) : (
        <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppRoute;
