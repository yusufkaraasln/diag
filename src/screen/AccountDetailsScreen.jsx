import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../component/accountDetails/Header';
import GuestAvatar from '../component/accountDetails/GuestAvatar';
import { useDispatch, useSelector } from 'react-redux';
import RightIcon from '../assets/icons/RightIcon';
import AccountDetailItem from '../component/accountDetails/AccountDetailItem';
import LogoutItem from '../component/accountDetails/LogoutItem';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { logout } from '../redux/slices/auth';
import { resetUserDetails } from '../redux/slices/userDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import GoogleAvatar from '../component/accountDetails/GoogleAvatar';

const AccountDetailsScreen = () => {
  const user = useSelector((state) => state.auth?.user);
  const userName = user?.auth_type == 'guest' ? user?.name.slice(0, 19) : user?.name;

  const dispatch = useDispatch();

  async function signOut() {
    try {
      await GoogleSignin.signOut();
      dispatch(logout());
      dispatch(resetUserDetails());
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error(error);
    }
  }

  const user_details = useSelector((state) => state.userDetails);

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.05
      }}>
      <Header title="Account Details" />

      {/* Navigate to Account Settings */}

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('AccountSettings')}
            style={{
              marginVertical: Dimensions.get('window').width * 0.1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: Dimensions.get('window').width * 0.05
              }}>
              {user?.avatar ? <GoogleAvatar avatar={user?.avatar} /> : <GuestAvatar />}
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: Dimensions.get('window').width * 0.04,
                  textTransform: 'capitalize'
                }}>
                {userName}
              </Text>
            </View>
            <RightIcon color={'#fff'} />
          </TouchableOpacity>

          {/* Navigate to User Details And Edit User Detail Items */}
          <AccountDetailItem
            title="Height"
            value={`${user_details?.tall} cm`}
            pushTo={'EditHeight'}
          />
          <AccountDetailItem
            title="Weight"
            value={`${user_details?.weight} kg`}
            pushTo={'EditWeight'}
          />
          <AccountDetailItem title="Age" value={`${user_details?.age}`} pushTo={'EditAge'} />
          <AccountDetailItem
            title="Biological Sex"
            value={`${user_details?.sex} `}
            pushTo={'EditBiologicalSex'}
          />
          <AccountDetailItem title="Having Diseases" value="" pushTo={'EditHavingDiseases'} />
          <AccountDetailItem title="Previous Diseases" value="" pushTo={'EditPreviousDiseases'} />
        </View>
      </View>
      <LogoutItem title="Logout" onPress={signOut} />
    </View>
  );
};

export default AccountDetailsScreen;
