import { ChallengeLink, Header, Input, Main, Result } from "components";
import { useState } from "react";
import styled from "styled-components";
import { CashButton } from "./CashButton";
import { checkCashRegister } from "./checkCashRegister";

const CashBar = styled.div`
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  padding: 0.4em;
  margin: 1em 0;
`;

const InputsBar = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Form = styled.form``;

export const CashRegister = () => {
  const coinTable = {
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
    ["1 HUNDRED:", 100],
  ];

  type resultProps = {
    status: string;
    change: (string | number)[][];
  };

  const [result, setResult] = useState<resultProps>({ status: "", change: [] });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const price = e.currentTarget.price.value;
    const cash = e.currentTarget.cash.value;
    const newResult = checkCashRegister(price, cash, registerCash);
    setResult(newResult);
  };

  const bannerItems = [
    "Cash Register",
    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register",
  ];

  return (
    <>
      <Header />
      <ChallengeLink itemsList={bannerItems} />
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
            <InputsBar>
              <Input
                inputName="Preço:"
                identifier="price"
                placeholder="Preço da compra"
              />
              <Input
                inputName="Dinheiro:"
                identifier="cash"
                placeholder="Dinheiro do cliente"
              />
              <button type="submit" onClick={() => console.log(registerCash)}>
                vascoooooooo
              </button>
            </InputsBar>
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
