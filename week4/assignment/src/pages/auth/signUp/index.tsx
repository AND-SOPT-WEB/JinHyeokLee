import { routePath } from "@constants";
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import STEPS_CONFIG from "src/constants/stepsConfig";
import FormFields from "./FormFields";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
    hobby: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step === 3) {
      alert("회원가입 완료!");
      navigate(routePath.LOGIN);
      console.log(formData);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  // 현재 step에 대한 정보만 불러오기 (index라 -1 해주기)
  const currentStep = STEPS_CONFIG[step - 1];

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <SubTitle>이름</SubTitle>
      <FormFields
        step={step}
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        onChange={handleInputChange}
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
