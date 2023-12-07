import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Animated, Dimensions, Easing, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setStart } from '../../redux/slices/startDiagno';

const Stethoscope = () => {
  const scaleAnim = new Animated.Value(1.1);

  const start = useSelector((state) => state.startDiagno?.start);

  const scaleAlways = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 750,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 750,
          useNativeDriver: true
        })
      ])
    ).start(() => scaleAlways());
  };

  const scaleOnce = () => {
    Animated.timing(scaleAnim, {
      toValue: 10,
      duration: 1500,
      useNativeDriver: true
    }).start(() =>
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 2500,
        useNativeDriver: true
      }).start(() => scaleAlways())
    );
  };

  useEffect(() => {
    start ? scaleOnce() : scaleAlways();
  }, [start]);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setStart(true));
            setTimeout(() => {
              navigation.navigate('DiagnoStart');
            }, 1000);
          }}
          activeOpacity={0.4}>
          <Animated.View
            style={{
              zIndex: 1,
              transform: [{ scale: scaleAnim }],
              width: Dimensions.get('window').width * 0.6,
              height: Dimensions.get('window').width * 0.6,
              backgroundColor: '#242526',
              borderWidth: Dimensions.get('window').width * 0.025,
              borderColor: '#00FFD1',
              borderRadius: Dimensions.get('window').width,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Animated.View
              style={{
                width: Dimensions.get('window').width * 0.45,
                height: Dimensions.get('window').width * 0.45,
                backgroundColor: '#242526',
                borderWidth: Dimensions.get('window').width * 0.2,
                borderColor: 'rgba(0, 255, 209, 0.4)',
                transform: [{ scale: scaleAnim }],
                borderRadius: Dimensions.get('window').width
              }}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
      {
        <View
          style={{
            width: Dimensions.get('window').width * 1,
            height: Dimensions.get('window').height / 5,
            alignItems: 'flex-start',
            justifyContent: 'center',
            zIndex: -1
          }}>
          <View
            style={{
              width: Dimensions.get('window').width * 0.52,
              borderBottomRightRadius: Dimensions.get('window').width * 0.3,
              borderRightColor: `${!start ? 'rgba(0, 255, 209, 0.5)' : '#242526'}`,
              borderRightWidth: Dimensions.get('window').width * 0.01,
              borderBottomColor: `${!start ? 'rgba(0, 255, 209, 0.5)' : '#242526'}`,
              borderBottomWidth: Dimensions.get('window').width * 0.01,
              height: '100%'
            }}></View>
        </View>
      }
    </View>
  );
};

export default Stethoscope;
