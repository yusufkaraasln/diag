import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSex } from '../../redux/slices/userDetails';
import { useTranslation } from 'react-i18next';

const UserBioSex = () => {
  // const [biologicalSex, setBiologicalSex] = React.useState('Male');
  const biologicalSex = useSelector((state) => state.userDetails.sex);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          gap: 50
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: Dimensions.get('window').width - 50
          }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>{t('what_is_bio_sex')}</Text>
          <Text style={{ color: '#00FFD1', fontSize: 16, fontWeight: '900' }}>
            {biologicalSex == 'Female' ? t('female') : t('male')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: Dimensions.get('window').width - 50,
            flex: 1,
            gap: 30
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => dispatch(setSex('Male'))}
            style={{
              flex: 1,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',

              justifyContent: 'center',
              backgroundColor: biologicalSex == 'Male' ? '#00FFD1' : '#fff'
            }}>
            <Text style={{ fontWeight: '500', color: '#242526', fontSize: 18 }}>{t('male')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flex: 1,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: biologicalSex == 'Female' ? '#00FFD1' : '#fff'
            }}
            onPress={() => dispatch(setSex('Female'))}>
            <Text style={{ fontWeight: '500', color: '#242526', fontSize: 18 }}>{t('female')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserBioSex;
