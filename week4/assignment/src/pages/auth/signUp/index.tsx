import styled from "@emotion/styled";
import FormFields from "./FormFields";

const SignUp = () => {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <SubTitle>이름</SubTitle>
      <FormFields />
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
