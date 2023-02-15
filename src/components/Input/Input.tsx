import styled from "styled-components";

const InputComp = styled.input`
  background-color: #0a0a23;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 5px;
  border: solid 1px #3b3b4f;
  height: 2.5em;
  width: 22em;
  padding-left: 0.5em;
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

type InputProps = {
  inputName?: string;
  inputHandler?: React.ChangeEventHandler<HTMLInputElement>;
  value?: any;
  placeholder?: string;
  inputType?: string;
  identifier?: string;
};

export const Input: React.FC<InputProps> = ({
  inputName,
  inputHandler,
  value,
  placeholder,
  inputType,
  identifier,
}) => {
  return (
    <div>
      {inputName && (
        <Title>
          <strong>{inputName}</strong>
        </Title>
      )}
      <InputComp
        type={inputType}
        onChange={inputHandler}
        placeholder={placeholder}
        value={value}
        name={identifier}
      />
    </div>
  );
};
