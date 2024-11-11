import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.green3};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;
  ${({ theme }) => theme.fonts.content};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green4};
  }
`;

export default Button;
