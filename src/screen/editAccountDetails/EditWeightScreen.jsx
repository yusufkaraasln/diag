import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Header from '../../component/accountDetails/Header';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { setWeight as setWeightStore } from '../../redux/slices/userDetails';
import { updateUserDetails } from '../../service/userDetails';
import { useTranslation } from 'react-i18next';
const EditWeightScreen = () => {
  const userWeigh = useSelector((state) => state.userDetails?.weight);
  const [weight, setWeight] = React.useState(userWeigh);

  const dispatch = useDispatch();

  const onSave = async () => {
    const res = await updateUserDetails('weight', weight);
    if (res.success) {
      console.log('weight updated');
      dispatch(setWeightStore(weight));
    } else {
      console.log('weight update failed');
    }
  };

  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.05
      }}>
      <Header onSave={onSave} title="Weight" />
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
              width: Dimensions.get('window').width - 180,
              height: 40
            }}
            value={weight}
            onValueChange={(value) => setWeight(value)}
            step={1}
            minimumValue={4}
            maximumValue={201}
            minimumTrackTintColor="#00FFD1"
            thumbTintColor="#fff"
            maximumTrackTintColor="#E6E6E6"
          />
        </View>
      </View>
    </View>
  );
};

export default EditWeightScreen;
