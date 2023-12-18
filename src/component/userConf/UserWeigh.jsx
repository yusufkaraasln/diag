import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { setWeight } from '../../redux/slices/userDetails';
import { useTranslation } from 'react-i18next';

const UserWeigh = () => {
  // const [weight, setWeight] = React.useState(80);
  const weight = useSelector((state) => state.userDetails.weight);
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
          <Text style={{ color: '#fff', fontSize: 16 }}>{t('how_many_weight')}</Text>
          <Text style={{ color: '#00FFD1', fontSize: 16, fontWeight: '900' }}>
            {weight > 200 ? '200+' : weight}
          </Text>
        </View>

        <Slider
          style={{
            transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
              width: Dimensions.get('window').width - 50,
              height: 40
          }}
          value={weight}
          onValueChange={(value) => dispatch(setWeight(value))}
          step={1}
          minimumValue={4}
          maximumValue={201}
          minimumTrackTintColor="#00FFD1"
          thumbTintColor="#fff"
          maximumTrackTintColor="#E6E6E6"
        />
      </View>
    </View>
  );
};

export default UserWeigh;
