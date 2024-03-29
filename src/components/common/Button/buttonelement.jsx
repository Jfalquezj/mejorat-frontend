import styled, { css } from "styled-components";
import variables from "./../../../lib/ui/variables";

const { primaryColor, secondaryColor } = variables;

export const StyledButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 20px;
  transition: 0.3s;

  ${({ primary }) =>
    primary &&
    css`
      border: none;
      background-color: ${primaryColor};
      color: ${secondaryColor};
      &:hover {
        background-color: rgb(113, 232, 208);
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      border: 1px solid ${primaryColor};
      background: ${secondaryColor};
      color: ${primaryColor};
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      &:hover {
        background-color: ${primaryColor};
        color: ${secondaryColor};
      }
    `}
    ${({ large }) =>
    large &&
    css`
      min-width: 350px;
    `}
    ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `}
    ${({ round }) =>
    round &&
    css`
      border-radius: 100px;
    `}
`;
