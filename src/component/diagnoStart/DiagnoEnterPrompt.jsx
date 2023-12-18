import {
  View,
  Text,
  TextInput,
  Dimensions,
  BackHandler,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrompt, setStep } from '../../redux/slices/startDiagno';
import DiagnoPromptTextProcessBar from './DiagnoPromptTextProcessBar';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const DiagnoEnterPrompt = ({ makeDiagno }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    const backAction = () => {
      dispatch(setPrompt(null));
      dispatch(setStep(1));

      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { t } = useTranslation();
  const handleKeyDown = (e) => {
    if (e.nativeEvent.key == 'Enter') {
      makeDiagno();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          backgroundColor: '#242526',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <>
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'left' }}>
            {t('prompt_title')}
          </Text>
          <View
            style={{
              width: '100%',
              position: 'relative'
            }}>
            <TextInput
              ref={inputRef}
              onChangeText={(text) => dispatch(setPrompt(text))}
              maxLength={350}
              onKeyPress={handleKeyDown}
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
        </>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default DiagnoEnterPrompt;
