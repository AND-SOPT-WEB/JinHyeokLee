import { routePath } from '@constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'src/apis/auth';
import STEPS_CONFIG from 'src/constants/stepsConfig';
import { handleError } from 'src/utils/errorUtil';

const useSignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    hobby: '',
  });
  const [formError, setFormError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const currentStep = STEPS_CONFIG[step - 1];
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let errorMessage = '';

    // 빈 문자열 검사
    if (value.trim() === '') {
      errorMessage = `${name}을(를) 입력해주세요.`;
    }

    // 글자수(8) 검사
    if (value.length > 8) {
      errorMessage = '8글자를 초과할 수 없습니다.';
    }

    // 비밀번호 & 비밀번호 확인 일치 검사
    if (name === 'password' || name === 'passwordConfirm') {
      const passwordError = validatePasswordMatch(
        name === 'password' ? value : formData.password,
        name === 'passwordConfirm' ? value : formData.passwordConfirm,
      );
      if (passwordError) {
        errorMessage = passwordError;
      }
    }

    setFormError(errorMessage);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 비밀번호 & 확인 단계에서는 두개의 input을 전부 확인해야해서 따로.. (쓰레기같다..)
    if (step === 2) {
      if (!formData.password.trim() || !formData.passwordConfirm.trim()) {
        setIsButtonDisabled(true);
        return;
      }
    }

    // 버튼 활성화 boolean 값 설정
    if (errorMessage === '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  // 비밀번호 확인 일치 확인 함수
  const validatePasswordMatch = (password: string, passwordConfirm: string): string | null => {
    if (password && passwordConfirm && password !== passwordConfirm) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return null;
  };

  // 회원가입 api 연결 함수
  const handleSubmit = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordConfirm, ...dataToSubmit } = formData;
      const result = await registerUser(dataToSubmit);
      if (result?.result) {
        alert('회원가입 성공');
        navigate(routePath.LOGIN);
      }
    } catch (error) {
      const { code } = handleError(error as Error);
      if (code === '00') {
        alert('중복된 이름입니다. 다시 회원가입 해주세요');
        navigate(routePath.LOGIN);
      }
    }
  };

  // step 증가 함수
  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step === 3) {
      handleSubmit();
    } else {
      setStep((prev) => prev + 1);
      setIsButtonDisabled(true);
    }
  };

  return {
    step,
    formError,
    isButtonDisabled,
    currentStep,
    handleInputChange,
    handleNextStep,
  };
};

export default useSignUp;
