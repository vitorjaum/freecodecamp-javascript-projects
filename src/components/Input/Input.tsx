import styled from "styled-components";

type inputTxtProps = {
  inputName?: string;
  inputHandler?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = styled.input`
  background-color: #0a0a23;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 5px;
  border: solid 1px #3b3b4f;
  height: 2.5em;
  width: 22em;
  &:focus {
    border-color: #dfdfe2;
  }
`;

const Title = styled.label`
  color: #f5f6f7;
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const InputTxt: React.FC<inputTxtProps> = ({
  inputName,
  inputHandler,
}) => {
  return (
    <div>
      {inputName && (
        <Title>
          <strong>{inputName}</strong>
        </Title>
      )}
      <Input
        type="text"
        onChange={inputHandler}
        placeholder="isso não existe"
      />
    </div>
  );
};
