import React from 'react';
import Body from 'react-native-body-highlighter';
import { View, Text, Switch, StyleSheet, Dimensions, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBodyPart } from '../../redux/slices/startDiagno';
import { useTranslation } from 'react-i18next';
const DiagnoSelectBody = () => {
  const bodyPart = useSelector((state) => state.startDiagno?.bodyPart);
  const dispatch = useDispatch();

  const [isBackSideEnabled, setIsBackSideEnabled] = useState(false);
  const toggleSwitch = () => setIsBackSideEnabled((previousState) => !previousState);

  React.useEffect(() => {
    const backAction = () => {
      dispatch(
        setBodyPart({
          slug: 'chest',
          intensity: 2
        })
      );
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: Dimensions.get('window').height * 0.03
        }}>
        {t('body_select_title')}
      </Text>
      <Body
        data={[bodyPart]}
        colors={{ 2: '#00FFD1', 1: '#00FFD1', 0: '#00FFD1' }}
        onBodyPartPress={(e) => dispatch(setBodyPart({ slug: e.slug, intensity: e.intensity }))}
        side={isBackSideEnabled ? 'back' : 'front'}
        scale={1.5}
      />
      <Switch
        onValueChange={toggleSwitch}
        thumbColor={'#00FFD1'}
        trackColor={{ false: 'gray', true: '#00FFD1' }}
        value={isBackSideEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242526',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default DiagnoSelectBody;
