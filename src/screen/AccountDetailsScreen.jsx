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
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  const { t } = useTranslation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.05
      }}>
     
        <Header title={t('acc_details_title')} />

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
              title={t('height')}
              value={`${user_details?.tall} cm`}
              pushTo={'EditHeight'}
            />
            <AccountDetailItem
              title={t('weight')}
              value={`${user_details?.weight} kg`}
              pushTo={'EditWeight'}
            />
            <AccountDetailItem title={t('age')} value={`${user_details?.age}`} pushTo={'EditAge'} />
            <AccountDetailItem
              title={t('biological_sex')}
              value={`${user_details?.sex == 'Female' ? t('female') : t('male')} `}
              pushTo={'EditBiologicalSex'}
            />
            <AccountDetailItem
              title={t('having_diseases')}
              value=""
              pushTo={'EditHavingDiseases'}
            />
            <AccountDetailItem
              title={t('previous_diseases')}
              value=""
              pushTo={'EditPreviousDiseases'}
            />
          </View>
        </View>
        <LogoutItem title={t('logout')} onPress={signOut} />
     
    </SafeAreaView>
  );
};

export default AccountDetailsScreen;
