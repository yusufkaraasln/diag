import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { setAge } from '../../redux/slices/userDetails';
import { useTranslation } from 'react-i18next';
const UserAge = () => {
  const age = useSelector((state) => state.userDetails.age);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          gap: 20
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: Dimensions.get('window').width - 50
          }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>{t('how_old_ru')}</Text>
          <Text style={{ color: '#00FFD1', fontSize: 16, fontWeight: '900' }}>
            {age > 65 ? '65+' : age}
          </Text>
        </View>

        <Slider
          style={{
            width: Dimensions.get('window').width - 50,

            width: Dimensions.get('window').width - 180,
            transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
            height: 40
          }}
         

          value={age}
          onValueChange={(value) => dispatch(setAge(value))}
          step={1}
          minimumValue={0}
          maximumValue={66}
          minimumTrackTintColor="#00FFD1"
          thumbTintColor="#fff"
          maximumTrackTintColor="#E6E6E6"
        />
      </View>
    </View>
  );
};

export default UserAge;
