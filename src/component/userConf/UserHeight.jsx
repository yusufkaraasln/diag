import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { setTall } from '../../redux/slices/userDetails';
import { useTranslation } from 'react-i18next';

const UserHeight = () => {
  // const [height, setHeight] = React.useState(173);
  const height = useSelector((state) => state.userDetails.tall);
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
          <Text style={{ color: '#fff', fontSize: 16 }}>{t('how_tall_ru')}</Text>
          <Text style={{ color: '#00FFD1', fontSize: 16, fontWeight: '900' }}>
            {height > 200 ? '200+' : height}
          </Text>
        </View>

        <Slider
          style={{
            width: Dimensions.get('window').width - 50,
            height: 40
          }}
          value={height}
          onValueChange={(value) => dispatch(setTall(value))}
          step={1}
          minimumValue={40}
          maximumValue={201}
          minimumTrackTintColor="#00FFD1"
          thumbTintColor="#fff"
          maximumTrackTintColor="#E6E6E6"
        />
      </View>
    </View>
  );
};

export default UserHeight;
