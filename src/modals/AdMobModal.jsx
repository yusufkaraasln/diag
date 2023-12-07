import { View, Text, Modal, ActivityIndicator, Dimensions, ToastAndroid } from 'react-native';
import React from 'react';

// import { RewardedAd, TestIds, RewardedAdEventType } from 'react-native-google-mobile-ads';
import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

import { useNavigation } from '@react-navigation/native';
import { setDiagno, setLoading } from '../redux/slices/endDiagno';
import { makeDiagno } from '../service/makeDiagno';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const rewarded = RewardedAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing']
// });

// const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-5357093479811799/1004140653';
const adUnitId = 'ca-app-pub-5357093479811799/1004140653';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing']
});

const AdMobModal = ({ adModalShow, setAdModalShow }) => {
  const [loaded, setLoaded] = React.useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { t } = useTranslation();

  // React.useEffect(() => {
  //   const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
  //     setLoaded(true);
  //   });
  //   const unsubscribeEarned = rewarded.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //     (reward) => {
  //       setAdModalShow(false);
  //       navigation.navigate('DiagnoResult');
  //     }
  //   );

  //   // Start loading the rewarded ad straight away
  //   rewarded.load();

  //   console.log('loaded', loaded);

  //   // Unsubscribe from events on unmount
  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };
  // }, []);

  React.useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    if (loaded && adModalShow) {
      interstitial.show();
      setAdModalShow(false);
      navigation.navigate('DiagnoResult');
    } else if (!loaded && adModalShow) {
      const timeout = setInterval(() => {
        ToastAndroid.showWithGravityAndOffset(
          t('loading_ad_failed'),
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        setAdModalShow(false);
        navigation.navigate('DiagnoResult');
      }, 3500);

      return () => {
        clearInterval(timeout);
      };
    }
    // wait 3 seconds and try again
  }, [
    loaded,
    adModalShow,

    interstitial
    // RewardedAdEventType.LOADED,
    // RewardedAdEventType.EARNED_REWARD
  ]);

  return (
    <Modal
      visible={adModalShow}
      onRequestClose={() => {
        setAdModalShow(!adModalShow);
      }}
      animationType="none"
      transparent={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#242526'
        }}>
        {!loaded && (
          <View
            style={{
              gap: Dimensions.get('window').width * 0.05
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16
              }}>
              {t('loading_ad')}
            </Text>
            <ActivityIndicator />
          </View>
        )}
      </View>
    </Modal>
  );
};

export default AdMobModal;
