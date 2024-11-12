const authPages = {
  LOGIN: '/',
  SIGN_UP: '/signup',
};

const myPagePages = {
  MY_PAGE: '/users/me',
  MY_PAGE_HOBBY: '/users/me/hobby',
  MY_PAGE_INFO: '/users/me/info',
};

// const errorPages = {
//   NOT_FOUND: "/*",
// };

export default {
  ...authPages,
  ...myPagePages,
  // ...errorPages,
};
