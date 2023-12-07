import { View, Text, TextInput, Dimensions, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrompt, setStep } from '../../redux/slices/startDiagno';
import DiagnoPromptTextProcessBar from './DiagnoPromptTextProcessBar';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const DiagnoEnterPrompt = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const backAction = () => {
      dispatch(setPrompt(null));
      dispatch(setStep(1));

      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>{t('prompt_title')}</Text>
      <View
        style={{
          width: '100%',
          position: 'relative'
        }}>
        <TextInput
          autoFocus={true}
          onChangeText={(text) => dispatch(setPrompt(text))}
          maxLength={350}
          style={{
            height: Dimensions.get('window').height / 7,
            marginVertical: 20,
            textAlignVertical: 'top',
            paddingHorizontal: 10,
            borderRadius: 10,
            color: '#00FFD1'
          }}
          placeholder={t('ph_prompt')}
          placeholderTextColor={'rgba(0, 255, 209, 0.4)'}
          multiline={true}
          numberOfLines={10}
        />
        <DiagnoPromptTextProcessBar />
      </View>
    </View>
  );
};

export default DiagnoEnterPrompt;
