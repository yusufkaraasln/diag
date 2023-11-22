import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import HomeScreen from '../../screen/HomeScreen';
import AuthScreen from '../../screen/auth/AuthScreen';
import UserConfigurationScreen from '../../screen/userConfigration';
import AccountDetailsScreen from '../../screen/AccountDetailsScreen';
import EditHeightScreen from '../../screen/editAccountDetails/EditHeightScreen';
import EditWeightScreen from '../../screen/editAccountDetails/EditWeightScreen';
import EditBiologicalSexScreen from '../../screen/editAccountDetails/EditBiologicalSexScreen';
import EditHavingDiseasesScreen from '../../screen/editAccountDetails/EditHavingDiseasesScreen';
import EditPreviousDiseasesScreen from '../../screen/editAccountDetails/EditPreviousDiseasesScreen';
import EditAgeScreen from '../../screen/editAccountDetails/EditAgeScreen';
import AccountSettingsScreen from '../../screen/AccountSettingsScreen';

const AppRoute = () => {
  const Stack = createNativeStackNavigator();
  const user = useSelector((state) => state.auth?.user);
  const configuration_steps = useSelector((state) => state.auth?.user?.configuration_steps);
  return (
    <Stack.Navigator>
      {user ? (
        <>
          {configuration_steps.completed ? (
            <>
              <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="AccountDetails"
                component={AccountDetailsScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="EditHeight"
                component={EditHeightScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="EditWeight"
                component={EditWeightScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="EditAge"
                component={EditAgeScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="EditBiologicalSex"
                component={EditBiologicalSexScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="EditHavingDiseases"
                component={EditHavingDiseasesScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="EditPreviousDiseases"
                component={EditPreviousDiseasesScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="AccountSettings"
                component={AccountSettingsScreen}
              />

            </>
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
