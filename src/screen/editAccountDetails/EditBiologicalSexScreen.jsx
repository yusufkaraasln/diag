import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../component/accountDetails/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setSex as setSexStore } from '../../redux/slices/userDetails';
import { updateUserDetails } from '../../service/userDetails';
import { useTranslation } from 'react-i18next';
const EditBiologicalSexScreen = () => {
  const userSex = useSelector((state) => state.userDetails.sex);
  const { t } = useTranslation();

  const [sex, setSex] = React.useState(userSex == 'Female' ? t('female') : t('male'));

  const dispatch = useDispatch();

  const onSave = async () => {
    const res = await updateUserDetails('sex', sex == t('female') ? 'Female' : 'Male');
    if (res.success) {
      console.log('sex updated');
      dispatch(setSexStore(sex == t('female') ? 'Female' : 'Male'));
    } else {
      console.log('sex update failed');
    }
  };

  console.log(sex);
  console.log(t('female'));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.05
      }}>
      <Header onSave={onSave} title="Biological Sex" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
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
            <Text style={{ color: '#00FFD1', fontSize: 16, fontWeight: '900' }}>{sex}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: Dimensions.get('window').width - 50,
              gap: 30
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSex(t('male'))}
              style={{
                flex: 1,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',

                justifyContent: 'center',
                backgroundColor: sex == t('male') ? '#00FFD1' : '#fff'
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
                backgroundColor: sex == t('female') ? '#00FFD1' : '#fff'
              }}
              onPress={() => setSex(t('female'))}>
              <Text style={{ fontWeight: '500', color: '#242526', fontSize: 18 }}>
                {t('female')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditBiologicalSexScreen;
