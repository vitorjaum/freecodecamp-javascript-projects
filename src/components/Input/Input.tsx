import styled from "styled-components";

const Input = styled.input`
  background-color: #0a0a23;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 5px;
  border: solid 1px #3b3b4f;
  &:focus {
    border-color: #dfdfe2;
  }
`;

const Title = styled.label`
  color: #f5f6f7;
`;

type inputTxtProps = {
  inputName: string;
  func: any;
};

export const InputTxt: React.FC<inputTxtProps> = ({ inputName, func }) => {
  return (
    <>
      {inputName && (
        <Title>
          <strong>{inputName}</strong>
        </Title>
      )}
      <Input type="text" onChange={func} />
    </>
  );
};
