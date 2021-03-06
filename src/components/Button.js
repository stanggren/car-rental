import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors._darkPrimary};
  background: none;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors._border};
  outline: inherit;
  margin: 2rem 0rem 2rem 1rem;
  width: 9rem;

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${(props) => props.theme.colors._darkPrimary};
      color: ${(props) => props.theme.colors._light};

      border: none;
      width: 9.47rem;

      &:hover {
        background-color: ${(props) => props.theme.colors._darkPrimary_hover};
        cursor: pointer;
      }
    `}

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: none;
      color: ${(props) => props.theme.colors._light};
      margin: 0.5rem 0 0.5rem 3rem;
      width: 7.5rem;

      &:hover {
        background: ${(props) => props.theme.colors._blue};
        color: ${(props) => props.theme.colors._light};
        border: 2px solid ${(props) => props.theme.colors._blue};
        cursor: pointer;
      }
    `}

    &:hover {
    background: ${(props) => props.theme.colors._blue};
    color: ${(props) => props.theme.colors._light};
    cursor: pointer;
  }
`;

const Button = ({ primary, transparent, children }) => {
  return (
    <>
      <StyledButton transparent={transparent} primary={primary}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
