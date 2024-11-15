import styled from '@emotion/styled';
import useSignUp from 'src/hooks/useSignUp';
import FormFields from './FormFields';


const SignUp = () => {
  const {
    step,

    formError,
    isButtonDisabled,
    currentStep,
    handleInputChange,
    handleNextStep,
  } = useSignUp();

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
