import Request from '../request';

export const updateStep = (user_details) => {
  return Request.put('/user-configuration/steps',{user_details});
};
