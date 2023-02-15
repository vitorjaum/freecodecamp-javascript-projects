import styled, { css } from "styled-components";

type Button = {
  primary?: null;
};

export const Button = styled.button<Button>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred
      color: white
      `}
`;
