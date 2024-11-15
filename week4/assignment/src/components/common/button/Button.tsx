import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: PropsWithChildren<ButtonProps>) => {
  return (
    <Wrapper type="button" onClick={onClick} disabled={disabled}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 0.3rem;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.green2 : theme.colors.green3)};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.green4 : theme.colors.white)};
  transition: all 0.2s ease-in-out;
  ${({ theme }) => theme.fonts.content};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
      background-color: ${theme.colors.green4};
    `}
  }
`;

export default Button;
