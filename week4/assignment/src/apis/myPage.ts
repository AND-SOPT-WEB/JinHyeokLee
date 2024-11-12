import { Axios } from './Axios';

export const getMyHobby = async () => {
  const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기

  const response = await Axios.get('/user/my-hobby', {
    headers: {
      token,
    },
  });
  return response.data;
};
