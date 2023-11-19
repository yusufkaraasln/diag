import { View, Text } from 'react-native';
import React from 'react';
import { updateStep } from '../../service/userConfiguration';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/auth';
import LoadingIcon from '../../assets/icons/LoadingIcon';

const ContinuesBar = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const user_details = useSelector((state) => state.userDetails);

  const updateConfigurationStep = async () => {
    setLoading(true);

    const res = await updateStep(user_details);
    if (res.success) {
      dispatch(setUser(res.data));
    } else {
      console.log('res.message', res.message);
    }
    setLoading(false);
  };

  return (
    <View
      style={{
        paddingHorizontal: 20
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
        {loading ? (
          <LoadingIcon color={'#00FFD1'} />
        ) : (
          <Text
            onPress={updateConfigurationStep}
            style={{
              color: '#00FFD1',
              fontSize: 18,
              fontWeight: '900',
              textAlign: 'right'
            }}>
            NEXT
          </Text>
        )}
      </View>
    </View>
  );
};

export default ContinuesBar;
