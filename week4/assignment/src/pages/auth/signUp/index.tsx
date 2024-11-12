import { routePath } from '@constants';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'src/apis/auth';
import STEPS_CONFIG from 'src/constants/stepsConfig';
import { handleError } from 'src/utils/errorUtil';
import FormFields from './FormFields';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    hobby: '',
  });
  const [formError, setFormError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // 현재 step에 대한 정보만 불러오기 (index라 -1 해주기)
  const currentStep = STEPS_CONFIG[step - 1];

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    let errorMessage = '';

    // 필드 필수 값 유효성 검사
    if (value.trim() === '') {
      errorMessage = `${name}을(를) 입력해주세요.`;
    }

    // 8글자 초과 유호성
    if (value.length > 8) {
      errorMessage = '8글자를 초과할 수 없습니다.';
    }

    // 비밀번호 일치 여부  검사
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

    if (errorMessage === '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const validatePasswordMatch = (password: string, passwordConfirm: string): string | null => {
    if (password && passwordConfirm && password !== passwordConfirm) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return null; // 일치하면 null 반환
  };

  const handleSubmit = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordConfirm, ...dataToSubmit } = formData; // 비밀번호 확인 데이터는 빼고 보내기
      const result = await registerUser(dataToSubmit);
      console.log(result);
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

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step === 3) {
      handleSubmit();
    } else {
      setStep((prev) => prev + 1);
      setIsButtonDisabled(true);
    }
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <SubTitle>{currentStep.subtitle}</SubTitle>
      <FormFields
        step={step}
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        onChange={handleInputChange}
        error={formError}
        disabled={isButtonDisabled}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 24rem;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.title}
`;

const SubTitle = styled.p`
  align-self: flex-start;
  ${({ theme }) => theme.fonts.subTitle}
  margin-top: 3rem;
`;

export default SignUp;
