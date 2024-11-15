import { Axios } from './Axios';

export const getMyHobby = async () => {
  const response = await Axios.get('/user/my-hobby');
  return response.data;
};

export const getOtherHobby = async (otherNum: string) => {
  const response = await Axios.get(`/user/${otherNum}/hobby`);
  return response.data;
};
