import { UpdateUserRequest } from 'src/types/request';
import { Axios } from './Axios';

export const updateUserInfo = async (updateData: UpdateUserRequest) => {
  const token = localStorage.getItem('token');

  const response = await Axios.put('/user', updateData, {
    headers: {
      token,
    },
  });

  return response.data;
};
