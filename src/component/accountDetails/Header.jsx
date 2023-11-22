import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LeftIcon from '../../assets/icons/LeftIcon';
import LoadingIcon from '../../assets/icons/LoadingIcon';
import GoogleAvatar from './GoogleAvatar';
import GuestAvatar from './GuestAvatar';

const Header = ({ title, onSave, avatar }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const onPress = async () => {
    setLoading(true);

    await onSave();
    setLoading(false);
  };

  return (
    <View
      style={{
        width: '100%',
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftIcon />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: Dimensions.get('window').width * 0.06,
            fontWeight: 'bold'
          }}>
          {title}
        </Text>
      </View>
      {onSave && (
        <>
          {loading ? (
            <LoadingIcon color={'#00FFD1'} loading={loading} />
          ) : (
            <TouchableOpacity onPress={onPress || (() => {})}>
              <Text
                style={{
                  color: '#00FFD1',
                  fontWeight: 'bold',
                  fontSize: Dimensions.get('window').width * 0.04
                }}>
                SAVE
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
      {avatar && (
        <>
          {avatar}
        </>
      )}
    </View>
  );
};

export default Header;
