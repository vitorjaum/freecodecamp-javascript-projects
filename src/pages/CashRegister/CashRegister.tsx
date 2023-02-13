import { Header, InputTxt, Main, Result } from "components";
import { useState } from "react";
import styled from "styled-components";
import { CashButton } from "./CashButton";
import { checkCashRegister } from "./checkCashRegister";

const CashBar = styled.div`
  display: flex;

  background-color: #0a0a23;
  gap: 9px;
  padding: 5px;
`;

const Form = styled.form``;

export const CashRegister = () => {
  const coinTable: any = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  const registerCash: any = [
    ["PENNY:", 0.01],
    ["NICKEL:", 0.05],
    ["DIME:", 0.1],
    ["QUARTER:", 0.25],
    ["ONE:", 1],
    ["FIVE:", 5],
    ["TEN:", 10],
    ["TWENTY:", 20],
    ["ONE HUNDRED:", 100],
  ];

  const [result, setResult]: any = useState({ status: "", change: [] });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const price = e.currentTarget.price.value;
    const cash = e.currentTarget.cash.value;
    const newResult = checkCashRegister(price, cash, registerCash);
    setResult(newResult);
  };

  return (
    <>
      <Header />
      <Main>
        <Form onSubmit={handleSubmit}>
          <CashBar>
            {registerCash.map((coinInfo: string, idx: number) => {
              const coinName = coinInfo[0];
              const coinValue = coinInfo[1];

              return (
                <CashButton
                  coinName={coinName}
                  coinValue={coinValue}
                  key={idx}
                  idx={idx}
                  registerCash={registerCash}
                />
              );
            })}
          </CashBar>
          <div>
            <div>
              <InputTxt
                inputName="Preço:"
                identifier="price"
                placeholder="Preço da compra"
              />
              <InputTxt
                inputName="Dinheiro:"
                identifier="cash"
                placeholder="DInheiro do cliente"
              />
              <button type="submit" onClick={() => console.log(registerCash)}>
                vascoooooooo
              </button>
            </div>
            <Result style={{ padding: 10 }}>
              <div>
                <p>Status:{result.status}</p>
                <p>Change:[{result.change}]</p>
              </div>
            </Result>
          </div>
        </Form>
      </Main>
    </>
  );
};
