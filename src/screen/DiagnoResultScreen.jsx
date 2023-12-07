import {
  View,
  Text,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Animated
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setBodyPart, setPrompt, setStep } from '../redux/slices/startDiagno';
import Header from '../component/diagnoResult/Header';
import SingleDiseaseCard from '../component/diagnoResult/SingleDiseaseCard';
import DiagnoResultLoadingModal from '../modals/DiagnoResultLoadingModal';
import { setDiagno } from '../redux/slices/endDiagno';
import { useTranslation } from 'react-i18next';

const DiagnoResultScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const backAction = () => {
    dispatch(setPrompt(null));
    dispatch(setStep(1));
    dispatch(setDiagno(null));
    dispatch(
      setBodyPart({
        slug: 'chest',
        intensity: 2
      })
    );

    navigation.navigate('Home');
    return true;
  };
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 64],
    outputRange: [0, -64]
  });

  const diagno = useSelector((state) => state.endDiagno?.diagno);

  const { t } = useTranslation();

  return (
    <View
      style={{
        backgroundColor: '#242526',
        flex: 1
      }}>
      {Header(translateY, navigation, backAction)}
      <ScrollView
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <DiagnoResultLoadingModal />
        <View
          style={{
            paddingVertical: Dimensions.get('window').height * 0.1,
            paddingHorizontal: Dimensions.get('window').width * 0.01
          }}>
          <View
            style={{
              gap: Dimensions.get('window').height * 0.03
            }}>
            <SingleDiseaseCard
              title={t('disease_name')}
              content={diagno?.disease_name || 'There is no disease name for this disease'}
            />

            <SingleDiseaseCard
              title={t('medicine_department')}
              content={diagno?.disease_medicine_department || 'There is no medicine department'}
            />
            <SingleDiseaseCard
              title={t('why_this_disease')}
              content={diagno?.why || 'There is no why for this disease'}
            />
            <SingleDiseaseCard
              title={t('general_summary_and_advice')}
              content={
                diagno?.general_summary_and_advice ||
                'There is no general summary and advice for this disease'
              }
            />
            <Text
              style={{
                color: '#242526',
                fontSize: Dimensions.get('window').width * 0.04,
                backgroundColor: '#00FFD1',
                marginHorizontal: Dimensions.get('window').width * 0.02,
                padding: Dimensions.get('window').width * 0.03,
                borderRadius: Dimensions.get('window').width * 0.04,

                marginBottom: Dimensions.get('window').height * 0.03,
                textAlign: 'left'
              }}>
              {t('result_info')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiagnoResultScreen;
