import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import UserHeight from './UserHeight';
import UserAge from './UserAge';
import UserBioSex from './UserBioSex';
import BeforeDiseases from './BeforeDiseases';
import OnGoingDiseases from './OnGoingDiseases';
import UserWeigh from './UserWeigh';

const UserInputs = () => {
  const { current } = useSelector((state) => state.auth?.user?.configuration_steps.status);

  switch (current) {
    case 0:
      return <UserAge />;
      break;
    case 1:
      return <UserHeight />;
      break;
    case 2:
      return <UserBioSex />;
      break;
    case 3:
      return <BeforeDiseases />;
      break;
    case 4:
      return <OnGoingDiseases/>;
      break;
    case 5:
      return <UserWeigh/>;
      break;
    case 6:
      return <Text style={{ color: '#fff', textAlign: 'center' }}>6</Text>;
      break;

    default:
      break;
  }
};

export default UserInputs;
