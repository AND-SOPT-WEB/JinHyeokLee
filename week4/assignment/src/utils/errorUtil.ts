interface CustomError extends Error {
  response?: {
    status: number;
    data: {
      code: string;
    };
  };
}

export const handleError = (error: CustomError) => {
  if (error.response?.status && error.response.data.code) {
    return {
      status: error.response.status,
      code: error.response.data.code,
    };
  }

  return {
    status: 999,
    code: '알 수 없는 에러',
  };
};
