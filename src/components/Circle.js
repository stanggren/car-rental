import React from "react";
import styled, { css } from "styled-components";

const StyledCircle = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;

  margin: 25px 0px 0px 148px;
  border-radius: 50%;

  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors._darkPrimary};
  background: ${(props) => props.theme.colors._accent};

  ${({ primary }) =>
    primary &&
    css`
      margin: 25px 0px 0px 158px;
    `}
`;

const Circle = ({ primary, children }) => {
  return (
    <>
      <StyledCircle primary={primary}>{children}</StyledCircle>
    </>
  );
};

export default Circle;
