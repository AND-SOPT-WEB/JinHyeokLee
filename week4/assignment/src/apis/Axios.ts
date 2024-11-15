import { routePath } from '@constants';
import axios from 'axios';

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    token: localStorage.getItem('token'),
  },
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['token'] = token; // 토큰 있을 경우만 headers에
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error);
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        alert('인증 정보가 필요합니다. 다시 로그인해주세요.');
        window.location.href = routePath.LOGIN;
      }

      // if (status === 403) {
      //   alert('접근 권한이 없습니다. 다시 로그인해주세요.');
      //   window.location.href = routePath.LOGIN;
      // }
    }

    return Promise.reject(error);
  },
);
