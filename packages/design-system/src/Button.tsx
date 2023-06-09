import * as React from 'react';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
    children: ReactNode;
}

const StyledButton = styled.button`
  background-color: red;
  padding: 10px;
  border: 1px solid #777;
  border-radius: 5px;
`;

const Button = ({ children }: ButtonProps) => {
    return <StyledButton>{children}</StyledButton>
}

export default Button
