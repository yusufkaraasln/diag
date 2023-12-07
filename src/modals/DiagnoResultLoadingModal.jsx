import { View, Text, Dimensions, ActivityIndicator, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingIcon from '../assets/icons/LoadingIcon';
import { BlurView } from '@react-native-community/blur';
import AnimatedText from '../component/diagnoResult/AnimatedText';
import { useNavigation } from '@react-navigation/native';
import { setBodyPart, setPrompt, setStep } from '../redux/slices/startDiagno';
import { setDiagno } from '../redux/slices/endDiagno';
import { useTranslation } from 'react-i18next';

const DiagnoResultLoadingModal = () => {
  const { loading } = useSelector((state) => state.endDiagno);
  const { t } = useTranslation();
  const [text, setText] = React.useState(t("loading_text_4"));

  const texts = [t('loading_text_1'), t('loading_text_2'), t('loading_text_3')];

  function sample(array) {
    const length = array == null ? 0 : array.length;
    return length ? array[Math.floor(Math.random() * length)] : undefined;
  }

  React.useEffect(() => {
    const ref = setInterval(() => {
      setText(sample(texts));
    }, 2500);

    () => clearInterval(ref);
  }, []);

  const diagnoData = useSelector((state) => state.endDiagno?.diagno);

  console.log('bu loading', loading);
  console.log('bu diagnoData', diagnoData);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Modal visible={loading || diagnoData == null} animationType="fade" transparent={true}>
      <BlurView
        style={{ flex: 1 }}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="black">
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: Dimensions.get('window').height * 0.05,
            backgroundColor: 'transparent'
          }}>
          <View />
          {loading == false && diagnoData == null ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#242526',
                borderRadius: Dimensions.get('window').width * 0.05,
                padding: Dimensions.get('window').width * 0.05,
                gap: Dimensions.get('window').height * 0.05,
                marginHorizontal: Dimensions.get('window').width * 0.05
              }}>
              <View
                style={{
                  gap: Dimensions.get('window').height * 0.02
                }}>
                <Text
                  style={{
                    color: '#00FFD1',
                    fontSize: Dimensions.get('window').width * 0.05,
                    textAlign: 'center'
                  }}>
                  {t('modal_error_title')}
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '300',
                    textAlign: 'center'
                  }}>
                  {t('modal_error_desc')}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                  dispatch(setStep(1));
                  dispatch(
                    setBodyPart({
                      slug: 'chest',
                      intensity: 2
                    })
                  );
                  dispatch(setPrompt(null));
                  dispatch(setDiagno(null));
                }}>
                <Text
                  style={{
                    color: '#242526',
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingHorizontal: Dimensions.get('window').width * 0.05,
                    paddingVertical: Dimensions.get('window').width * 0.025,
                    borderRadius: Dimensions.get('window').width * 0.05,
                    textAlign: 'center',
                    backgroundColor: '#00FFD1'
                  }}>
                  {t('ok')}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <ActivityIndicator size="large" color="#00FFD1" />
              <AnimatedText text={text} />
            </>
          )}
        </View>
      </BlurView>
    </Modal>
  );
};

export default DiagnoResultLoadingModal;
