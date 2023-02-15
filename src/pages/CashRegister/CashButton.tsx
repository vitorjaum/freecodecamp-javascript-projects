import { useState } from "react";
import styled from "styled-components";

const CashItem = styled.div`
  border: 2px solid white;
  background-color: #3b3b4f;
  color: #f5f6f7;
  font-size: 0.8rem;
  width: 6.9em;
  height: 8em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
`;

const HandlerButton = styled.button`
  font-size: 1.5rem;
  color: palevioletred;
  border: #f5f6f7 solid 0.1em;
  border-bottom: 0;
  background: transparent;
  cursor: pointer;
  width: 50%;
`;

const ButtonNumber = styled.p`
  font-size: 1.4em;
`;

export const CashButton = (props: any) => {
  const { coinName, coinValue, idx, registerCash } = props;

  const [coinLength, setCoinLength] = useState(coinValue);
  registerCash[idx][1] = coinLength;
  const buttonHandler = (value: number) => {
    value >= 0 && setCoinLength(Number(value.toFixed(2)));
  };

  return (
    <CashItem key={idx}>
      <p>{coinName}</p>
      {<ButtonNumber>{coinLength}</ButtonNumber>}
      <ButtonsBar>
        <HandlerButton
          type="button"
          onClick={() => buttonHandler(coinLength - coinValue)}
        >
          -
        </HandlerButton>
        <HandlerButton
          type="button"
          onClick={() => buttonHandler(coinLength + coinValue)}
        >
          +
        </HandlerButton>
      </ButtonsBar>
    </CashItem>
  );
};
