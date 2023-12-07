import Request from '../request';

export const deleteUser = async () => {
  return Request.delete(`/user-settings`);
};
