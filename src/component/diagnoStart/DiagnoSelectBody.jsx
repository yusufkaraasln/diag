import React from 'react';
import Body from 'react-native-body-highlighter';
import { View, Text, Switch, StyleSheet, Dimensions, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBodyPart } from '../../redux/slices/startDiagno';
import { useTranslation } from 'react-i18next';
const DiagnoSelectBody = ({ isBackSideEnabled }) => {
  const bodyPart = useSelector((state) => state.startDiagno?.bodyPart);
  const dispatch = useDispatch();

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
          fontSize: Dimensions.get('window').width * 0.04,
          textAlign: 'center'
        }}>
        {t('body_select_title')}
      </Text>
      <Body
        data={[bodyPart]}
        colors={{ 2: '#00FFD1', 1: '#00FFD1', 0: '#00FFD1' }}
        onBodyPartPress={(e) => dispatch(setBodyPart({ slug: e.slug, intensity: e.intensity }))}
        side={isBackSideEnabled ? 'back' : 'front'}
        scale={Dimensions.get('screen').height * 0.0019}
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
