import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Header from '../../component/accountDetails/Header';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { setAge as setAgeStore } from '../../redux/slices/userDetails';
import { updateUserDetails } from '../../service/userDetails';
const EditAgeScreen = () => {
  const userAge = useSelector((state) => state.userDetails?.age);

  const dispatch = useDispatch();

  const [age, setAge] = React.useState(userAge);

  const onSave = async () => {
    const res = await updateUserDetails('age', age);
    if (res.success) {
      console.log('age updated');
      dispatch(setAgeStore(age));
    } else {
      console.log('age update failed');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        padding: Dimensions.get('window').width * 0.05
      }}>
      <Header onSave={onSave} title="Age" />
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
            <Text style={{ color: '#fff', fontSize: 16 }}>How old are you?</Text>
            <Text style={{ color: '#00FFD1', fontSize: 16, fontWeight: '900' }}>
              {age > 65 ? '65+' : age}
            </Text>
          </View>

          <Slider
            style={{
              width: Dimensions.get('window').width - 180,
              transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
              height: 40
            }}
            value={age}
            onValueChange={(value) => setAge(value)}
            step={1}
            minimumValue={0}
            maximumValue={66}
            minimumTrackTintColor="#00FFD1"
            thumbTintColor="#fff"
            maximumTrackTintColor="#E6E6E6"
          />
        </View>
      </View>
    </View>
  );
};

export default EditAgeScreen;
