import { View, Text, Modal, ActivityIndicator, Dimensions, ToastAndroid } from 'react-native';
import React from 'react';

import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

import { useNavigation } from '@react-navigation/native';

import { useTranslation } from 'react-i18next';

// const adUnitId = 'ca-app-pub-5357093479811799/1004140653';


// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing']
// });

const AdMobModal = ({ adModalShow, setAdModalShow }) => {
  // const [loaded, setLoaded] = React.useState(false);

  // const navigation = useNavigation();

  const { t } = useTranslation();

  // React.useEffect(() => {
  //   const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
  //     setLoaded(true);
  //     setAdModalShow(false);
  //     navigation.navigate('DiagnoResult');
  //   });

  //   const unsubscribeError = interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
  //     ToastAndroid.showWithGravityAndOffset(
  //       t('loading_ad_failed'),
  //       ToastAndroid.LONG,
  //       ToastAndroid.BOTTOM,
  //       25,
  //       50
  //     );
  //     setAdModalShow(false);
  //     navigation.navigate('Home');
  //   });

  //   interstitial.load();

  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeError();
  //   };
  // }, []);

  // console.log('Google Reklam loaded', loaded);

  // React.useEffect(() => {
  //   if (loaded) interstitial.show();
  // }, [loaded]);

  // React.useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
  //     setAdModalShow(false);
  //     navigation.navigate('DiagnoResult');
  //   });

  //   return () => unsubscribe();
  // }, [interstitial]);

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
        {/* {!loaded && ( */}
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
        {/* )} */}
      </View>
    </Modal>
  );
};

export default AdMobModal;
