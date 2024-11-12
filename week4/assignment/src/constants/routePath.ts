const authPages = {
  LOGIN: '/',
  SIGN_UP: '/signup',
};

const myPagePages = {
  MY_PAGE: '/users/me',
  MY_PAGE_INFO: '/users/me/info',
};

export default {
  ...authPages,
  ...myPagePages,
};
