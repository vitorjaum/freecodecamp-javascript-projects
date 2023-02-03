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
  const { coinName, coinValue, idx } = props;
  console.log(coinName);
  const [updateButton, setUpdateButton] = useState(coinName);
  return (
    <CashItem key={idx}>
      <p>{coinName}</p>
      <div>
        <HandlerButton>-</HandlerButton>
        {<p>{coinValue}</p>}
        <HandlerButton>+</HandlerButton>
      </div>
    </CashItem>
  );
};
