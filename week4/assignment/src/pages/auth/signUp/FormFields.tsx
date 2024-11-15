import { Button } from '@components';
import { routePath } from '@constants';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PwCloseIcon from 'src/assets/pwd_close.svg';
import PwOpenIcon from 'src/assets/pwd_open.svg';
import { StepInfo } from 'src/types/signUpTypes';

interface FormFieldsProps {
  step: number;
  currentStep: StepInfo;
  handleNextStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  disabled: boolean;
}

const FormFields = ({ step, currentStep, handleNextStep, onChange, error, disabled }: FormFieldsProps) => {
  const [isPwVisible, setIsPwVisible] = useState(false);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(routePath.LOGIN);
  };

  const handlePwVisibility = () => {
    setIsPwVisible((prev) => !prev);
  };

  return (
    <FormLayout>
      {currentStep.inputs.map(({ name, placeholder }) => {
        const isPassword = name === 'password';
        const isPasswordConfirm = name === 'passwordConfirm';

        const inputType = isPassword && !isPwVisible ? 'password' : 'text';
        const finalType = isPasswordConfirm ? 'password' : inputType;

        return (
          <InputWrapper key={name}>
            <Input type={finalType} placeholder={placeholder} name={name} onChange={onChange} required />
            {isPassword && (
              <IconWrapper onClick={handlePwVisibility}>
                {isPwVisible ? <Icon src={PwCloseIcon} /> : <Icon src={PwOpenIcon} />}
              </IconWrapper>
            )}
          </InputWrapper>
        );
      })}{' '}
      <HelperText>{error}</HelperText>
      <Button onClick={handleNextStep} disabled={disabled}>
        {step === 3 ? '회원가입' : '다음'}
      </Button>
      <SubText>
        이미 회원이신가요? <SubButton onClick={navigateToLogin}>로그인</SubButton>
      </SubText>
    </FormLayout>
  );
};

const FormLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 0.3rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.green3};
  }
`;

const Icon = styled.img``;
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

const HelperText = styled.p`
  color: #e76565;
`;

const SubText = styled.p`
  margin-top: 1.5rem;
`;

const SubButton = styled.button`
  margin-top: 0.5rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.green4};
  cursor: pointer;
`;

export default FormFields;
