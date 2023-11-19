const { default: Request } = require('../request');

export const googleAuth = (idToken) => {
  return Request.post('/auth/google-login', { idToken });
};

export const guestAuth = () => {
  return Request.post('/auth/guest-login');
};
export const getUserByToken = (token) => {
  return Request.post('/auth/user', { token });
};
