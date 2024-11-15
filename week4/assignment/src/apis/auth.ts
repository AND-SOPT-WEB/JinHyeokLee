import { RegisterUserRequest } from 'src/types/request';
import { Axios } from './Axios';

export const registerUser = async (formData: RegisterUserRequest) => {
  const response = await Axios.post(`/user`, formData);
  return response.data;
};

export const loginUser = async (username: string, password: string) => {
  const response = await Axios.post('/login', {
    username,
    password,
  });
  return response.data;
};
