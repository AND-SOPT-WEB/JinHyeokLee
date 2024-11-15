import { UpdateUserRequest } from 'src/types/request';
import { Axios } from './Axios';

export const updateUserInfo = async (updateData: UpdateUserRequest) => {
  const response = await Axios.put('/user', updateData);

  return response.data;
};
