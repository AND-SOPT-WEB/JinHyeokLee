import { Axios } from './Axios';

export const getMyHobby = async () => {
  const token = localStorage.getItem('token');

  const response = await Axios.get('/user/my-hobby', {
    headers: {
      token,
    },
  });
  return response.data;
};

export const getOtherHobby = async (otherNum: string) => {
  const token = localStorage.getItem('token');

  const response = await Axios.get(`/user/${otherNum}/hobby`, {
    headers: {
      token,
    },
  });
  return response.data;
};
