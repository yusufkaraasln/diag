import { View, Text, Dimensions, TextInput, TouchableOpacity, Input } from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import XMarkIcon from '../../assets/icons/XMarkIcon';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setOngoingDiseases } from '../../redux/slices/userDetails';

const OnGoingDiseases = () => {
  // const [diseases, setDiseases] = React.useState([]);
  const diseases = useSelector((state) => state.userDetails.ongoing_diseases);
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);

 console.log('diseases', diseases);

  React.useEffect(() => {
    if (diseases.length > 0 && toggleCheckBox) {
      setToggleCheckBox(false);
    }
  }, [diseases]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20
      }}>
      <Text style={{ color: '#fff', fontSize: 16 }}>What is your ongoing illness or diseases?</Text>
      <View
        style={{
          height: 50,
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          borderRadius: 50,
          width: Dimensions.get('window').width - 50
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10
          }}>
          <SearchIcon />
          <TextInput
            style={{
              height: 50,
              width: Dimensions.get('window').width / 1.5,
              fontSize: 16
            }}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholderTextColor={'#a0aec0'}
            placeholder="Search Disease..."
          />
        </View>

        <Text
          onPress={() => {
            // setDiseases([...diseases, search]);
            dispatch(setOngoingDiseases([...diseases, search]));
            setSearch('');
          }}>
          OK
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: Dimensions.get('window').width - 50,
          gap: 10
        }}>
        <CheckBox
          onCheckColor="#00FFD1"
          tintColor="#00FFD1"
          tintColors={{ true: '#00FFD1', false: '#fff' }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text
          onPress={() => {
            setToggleCheckBox(!toggleCheckBox);
            // setDiseases([]);
            dispatch(setOngoingDiseases([]));
          }}
          style={{
            color: '#fff',
            fontSize: 14
          }}>
          I do not have any disease
        </Text>
      </View>
      <View
        style={{
          width: Dimensions.get('window').width - 50,
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 10
        }}>
        {diseases.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // setDiseases(diseases.filter((disease) => disease !== item));
              dispatch(setOngoingDiseases(diseases.filter((disease) => disease !== item)));
            }}
            key={index}
            style={{
              backgroundColor: '#00FFD1',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10
            }}>
            <Text
              style={{
                fontWeight: '500',
                maxWidth: Dimensions.get('window').width / 2
              }}
              numberOfLines={1}>
              {item}
            </Text>
            <XMarkIcon />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OnGoingDiseases;
