import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../component/accountDetails/Header';
import AccountSettingsItem from '../component/accountSettings/AccountSettingsItem';
import { useSelector } from 'react-redux';
import RightIcon from '../assets/icons/RightIcon';
import DeleteAccountModal from '../modals/DeleteAccountModal';
import { BlurView } from '@react-native-community/blur';
import GoogleAvatar from '../component/accountDetails/GoogleAvatar';
import GuestAvatar from '../component/accountDetails/GuestAvatar';

const AccountSettingsScreen = () => {
  const user = useSelector((state) => state.auth?.user);
  const userName = user?.auth_type == 'guest' ? user?.name.slice(0, 19) : user?.name;

  const formattedCreatedAt = new Date(user?.createdAt).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.05,
        position: 'relative'
      }}>
      <DeleteAccountModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Header
        avatar={
          user?.auth_type == 'guest' ? <GuestAvatar /> : <GoogleAvatar avatar={user?.avatar} />
        }
        title="Account Settings"
      />
      <View
        style={{
          marginVertical: Dimensions.get('window').width * 0.1
        }}>
        <AccountSettingsItem title="Name" value={userName} />
        <AccountSettingsItem title="Created At" value={formattedCreatedAt} />
        <AccountSettingsItem title="Account Type" value={user.auth_type} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: Dimensions.get('window').width * 0.05
        }}>
        <Text
          style={{
            color: '#fff',

            fontSize: Dimensions.get('window').width * 0.04
          }}>
          Delete Account
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: Dimensions.get('window').width * 0.15
          }}>
          <RightIcon color={'#fff'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountSettingsScreen;
