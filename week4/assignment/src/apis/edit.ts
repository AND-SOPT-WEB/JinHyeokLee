import { UpdateUserRequest } from 'src/types/request';
import { Axios } from './Axios';

export const UpdateUserInfo = async (updateData: UpdateUserRequest) => {
  const token = localStorage.getItem('token');

  Axios.put('/user', updateData, {
    headers: {
      token,
    },
  });
};
