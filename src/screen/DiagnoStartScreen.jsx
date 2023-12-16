import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStart, setStep } from '../redux/slices/startDiagno';
import DiagnoStartStepbar from '../component/diagnoStart/DiagnoStartStepbar';
import DiagnoSelectBody from '../component/diagnoStart/DiagnoSelectBody';
import DiagnoEnterPrompt from '../component/diagnoStart/DiagnoEnterPrompt';
import AdMobModal from '../modals/AdMobModal';
import { setDiagno, setLoading } from '../redux/slices/endDiagno';
import { makeDiagno } from '../service/makeDiagno';
import { useTranslation } from 'react-i18next';
import { AdEventType, InterstitialAd } from 'react-native-google-mobile-ads';
import { useNavigation } from '@react-navigation/native';

// GOOGLE ADS
const adUnitId = 'ca-app-pub-5357093479811799/1004140653';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing']
});
// GOOGLE ADS

const DiagnoStartScreen = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.startDiagno?.step);
  const { t, i18n } = useTranslation();

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    dispatch(setStep(1));
    return () => {
      dispatch(setStart(false));
    };
  }, []);

  const { bodyPart, prompt } = useSelector((state) => state.startDiagno);
  console.log('prompt', prompt?.length);
  // const makeDiagnoAndShowAd = async () => {
  //   if (loaded) {
  //     interstitial.show();

  //     navigation.navigate('DiagnoResult');

  //     dispatch(setLoading(true));

  //     const res = await makeDiagno({
  //       userComplaints: prompt,
  //       closestPainArea: bodyPart.slug,
  //       lang: i18n.language
  //     });

  //     if (res.success) {
  //       dispatch(setLoading(false));
  //       dispatch(setDiagno(res.data));
  //     } else {
  //       dispatch(setLoading(false));
  //     }
  //   } else {
  //     navigation.navigate('DiagnoResult');

  //     dispatch(setLoading(true));

  //     const res = await makeDiagno({
  //       userComplaints: prompt,
  //       closestPainArea: bodyPart.slug,
  //       lang: i18n.language
  //     });

  //     if (res.success) {
  //       dispatch(setLoading(false));
  //       dispatch(setDiagno(res.data));
  //     } else {
  //       dispatch(setLoading(false));
  //     }
  //   }
  // };

  const makeDiagnoAndShowAd = async () => {
    navigation.navigate('DiagnoResult');
    dispatch(setLoading(true));

    if (loaded) {
      interstitial.show();
    }

    const res = await makeDiagno({
      userComplaints: prompt,
      closestPainArea: bodyPart.slug,
      lang: i18n.language
    });

    dispatch(setLoading(false));

    if (res.success) {
      dispatch(setDiagno(res.data));
    }
  };

  console.log("Reklam yüklenme durumu", loaded);

  // GOOGLE ADS SHOW

  const navigation = useNavigation();

  const [adModalShow, setAdModalShow] = useState(false);

  React.useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
      // setAdModalShow(false);
      // navigation.navigate('DiagnoResult');
    });

    const unsubscribeError = interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
      ToastAndroid.showWithGravityAndOffset(
        t('loading_ad_failed'),
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      // setAdModalShow(false);
      // navigation.navigate('Home');
    });

    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeError();
    };
  }, []);

  // GOOGLE ADS SHOW

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242526',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
      }}>
      {adModalShow && <AdMobModal adModalShow={adModalShow} setAdModalShow={setAdModalShow} />}
      <DiagnoStartStepbar step={step} />
      {
        {
          1: <DiagnoSelectBody />,
          2: <DiagnoEnterPrompt />
        }[step]
      }
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        {step > 1 ? (
          <TouchableOpacity onPress={() => dispatch(setStep(1))} activeOpacity={0.8}>
            <Text
              style={{
                color: '#ccc',
                fontSize: Dimensions.get('window').width * 0.04,
                fontWeight: '900',
                textAlign: 'right'
              }}>
              {t('prev')}
            </Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        {(step == 2 && prompt?.length >= 1) || step == 1 ? (
          <TouchableOpacity
            onPress={async () => {
              if (step == 2) {
                makeDiagnoAndShowAd();
              } else {
                dispatch(setStep(step + 1));
              }
            }}
            activeOpacity={0.8}>
            <Text
              style={{
                color: '#00FFD1',
                fontSize: Dimensions.get('window').width * 0.04,
                fontWeight: '900',
                textAlign: 'right'
              }}>
              {t('next')}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default DiagnoStartScreen;
