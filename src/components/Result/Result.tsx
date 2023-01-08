import styled, { css } from "styled-components";

type ResultProps = {
  messageTheme?: string;
};

export const Result = styled.div<ResultProps>`
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid;
  margin: 0.5em 0;
  background-color: grey;
  color: #f5f6f7;
  ${(props) =>
    props.messageTheme == "redMessage" &&
    css`
      background-color: #ffadad;
      color: #850000;
    `}
  ${(props) =>
    props.messageTheme == "greenMessage" &&
    css`
      background-color: #cbffad;
      color: #008500;
    `}
  ${(props) =>
    props.messageTheme == "default" &&
    css`
      background-color: grey;
      color: #f5f6f7;
    `}
`;
