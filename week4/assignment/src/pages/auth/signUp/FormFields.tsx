import { Button } from '@components';
import { routePath } from '@constants';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(routePath.LOGIN);
  };

  return (
    <FormLayout>
      {currentStep.inputs.map(({ name, type, placeholder }) => (
        <Input key={name} type={type} placeholder={placeholder} name={name} onChange={onChange} required />
      ))}
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
