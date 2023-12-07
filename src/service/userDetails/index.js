const { default: Request } = require('../request');

export const updateUserDetails = async (field, value) => {
  return Request.put(`/user-details?detail=${field}`, { value });
};
