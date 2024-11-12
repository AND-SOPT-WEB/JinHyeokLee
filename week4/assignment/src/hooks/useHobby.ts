import { useEffect, useState } from 'react';
import { getMyHobby, getOtherHobby } from 'src/apis/hobby';
import { handleError } from 'src/utils/errorUtil';

const useHobby = () => {
  const [myHobby, setMyHobby] = useState('');
  const [otherHobby, setOtherHobby] = useState('');

  useEffect(() => {
    const fetchMyHobby = async () => {
      try {
        const data = await getMyHobby();
        setMyHobby(data.result.hobby);
      } catch (error) {
        const { status } = handleError(error as Error);

        if (status !== 401 && status !== 403) {
          alert('알 수 없는 오류가 발생했습니다.');
        }
      }
    };

    fetchMyHobby();
  }, []);

  const fetchOtherHobby = async (otherNum: string) => {
    try {
      const data = await getOtherHobby(otherNum);
      setOtherHobby(data.result.hobby);
    } catch (error) {
      const { status, code } = handleError(error as Error);

      if (status === 404 && code === '01') {
        alert('존재하지 않는 숫자입니다.');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return { myHobby, otherHobby, fetchOtherHobby };
};

export default useHobby;
