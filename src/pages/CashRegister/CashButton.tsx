import { useState } from "react";
import styled from "styled-components";

const CashItem = styled.div`
  border: 2px solid white;
  background-color: #3b3b4f;
  color: #f5f6f7;
  font-size: 0.8rem;
  width: 6em;
`;

const HandlerButton = styled.button`
  font-size: 1.5rem;
  color: palevioletred;
  background: transparent;
  cursor: pointer;
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
      <div>
        <HandlerButton
          type="button"
          onClick={() => buttonHandler(coinLength - coinValue)}
        >
          -
        </HandlerButton>
        {<p>{coinLength}</p>}
        <HandlerButton
          type="button"
          onClick={() => buttonHandler(coinLength + coinValue)}
        >
          +
        </HandlerButton>
      </div>
    </CashItem>
  );
};
