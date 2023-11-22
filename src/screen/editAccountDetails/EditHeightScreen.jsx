import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Header from '../../component/accountDetails/Header';
import UserHeight from '../../component/userConf/UserHeight';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { setTall } from '../../redux/slices/userDetails';
import { updateUserDetails } from '../../service/userDetails';
const EditHeightScreen = () => {
  const { tall } = useSelector((state) => state.userDetails);
  const [height, setHeight] = React.useState(tall);

  const dispatch = useDispatch();

  const onSave = async () => {
    const res = await updateUserDetails('tall', height);
    if (res.success) {
      console.log('tall updated');
      dispatch(setTall(height));
    } else {
      console.log('tall update failed');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.05
      }}>
      <Header onSave={onSave} title="Height" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
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
              <Text style={{ color: '#fff', fontSize: 16 }}>How tall are you in cm?</Text>
              <Text style={{ color: '#00FFD1', fontSize: 16, fontWeight: '900' }}>
                {height > 200 ? '200+' : height}
              </Text>
            </View>

            <Slider
              style={{
                width: Dimensions.get('window').width - 180,
                height: 40,
                transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }]
              }}
              value={height}
              onValueChange={(value) => setHeight(value)}
              step={1}
              minimumValue={40}
              maximumValue={201}
              minimumTrackTintColor="#00FFD1"
              thumbTintColor="#fff"
              maximumTrackTintColor="#E6E6E6"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditHeightScreen;
