import { View, Text, Dimensions, TextInput, TouchableOpacity, Input } from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import XMarkIcon from '../../assets/icons/XMarkIcon';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setBeforeDiseases } from '../../redux/slices/userDetails';
import { useTranslation } from 'react-i18next';

const BeforeDiseases = () => {
  // const [diseases, setDiseases] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const diseases = useSelector((state) => state.userDetails.before_diseases);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (diseases.length > 0 && toggleCheckBox) {
      setToggleCheckBox(false);
    }
  }, [diseases]);

  const { t } = useTranslation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20
      }}>
      <Text style={{ color: '#fff', fontSize: 16 }}>{t('what_before_disease')}</Text>
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
          {/* <SearchIcon /> */}
          <TextInput
            style={{
              height: 50,
              width: Dimensions.get('window').width / 1.5,
              fontSize: 16,
              paddingLeft: Dimensions.get('window').width * 0.03,
              color: '#242526'
            }}
            editable={diseases?.length < 5}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholderTextColor={'#a0aec0'}
            placeholder={diseases?.length < 5 ? t('ph_input') : t("max_disease_lim")}
          />
        </View>

        {diseases?.length < 5 && (
          <Text
            style={{
              color: '#00FFD1',
              fontSize: 16,
              backgroundColor: '#242526',
              paddingHorizontal: Dimensions.get('window').width * 0.04,
              paddingVertical: Dimensions.get('window').width * 0.02,
              borderRadius: 99,

              fontWeight: 'bold'
            }}
            onPress={() => {
              search &&
                !diseases.includes(search) &&
                search.replace(/\s+/g, '').length &&
                // setDiseases([...diseases, search.trim()]);
                dispatch(setBeforeDiseases([...diseases, search.trim()]));
              setSearch('');
            }}>
            {t('add')}
          </Text>
        )}
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
          onValueChange={(newValue) => {
            dispatch(setBeforeDiseases([]));
            setToggleCheckBox(newValue);
          }}
        />
        <Text
          onPress={() => {
            setToggleCheckBox(!toggleCheckBox);
            // setDiseases([]);
            dispatch(setBeforeDiseases([]));
          }}
          style={{
            color: '#fff',
            fontSize: 14
          }}>
          {t('dont_have_disease_before')}
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
              dispatch(setBeforeDiseases(diseases.filter((disease) => disease !== item)));
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
                maxWidth: Dimensions.get('window').width / 2,
                color: '#242526'

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

export default BeforeDiseases;
