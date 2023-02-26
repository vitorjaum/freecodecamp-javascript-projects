import {
  Button,
  ChallengeDescription,
  ChallengeLink,
  Emphasis,
  Header,
  Input,
  Main,
  Result,
  Title,
} from "components";
import { useState } from "react";
import styled from "styled-components";
import { CashButton } from "./CashButton";
import { checkCashRegister } from "./checkCashRegister";
import { CurrencyTable } from "./helpers/CurrencyTable";

const CurrenciesBar = styled.div`
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
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Div = styled.div``;

const Form = styled.form`
  width: 20em;
`;

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
      <Title>Cash Register</Title>
      <Main
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ChallengeDescription>
          <p>
            This project is a cash register, who receive{" "}
            <Emphasis>price</Emphasis>, <Emphasis>money</Emphasis> and calculate
            the change, showing the state, value of change and a array of coins.
            For the value of status property, we follow this logic:
            <br />
            <br />
          </p>
          <p>
            Return{" "}
            <Emphasis>{'{status: "INSUFFICIENT_FUNDS", change: []}'}</Emphasis>{" "}
            if cash-in-drawer is less than the change due, or if you cannot
            return the exact change.
            <br />
            <br />
          </p>
          <p>
            Return <Emphasis>{'{status: "CLOSED", change: [...]}'}</Emphasis>{" "}
            with cash-in-drawer as the value for the key change if it is equal
            to the change due.
            <br />
            <br />
          </p>
          <p>
            Otherwise, return{" "}
            <Emphasis>{'{status: "OPEN", change: [...]}'}</Emphasis>, with the
            change due in coins and bills, sorted in highest to lowest order, as
            the value of the change key.
            <br />
            <br />
          </p>
          <CurrencyTable />
        </ChallengeDescription>
        <Div>
          <Form onSubmit={handleSubmit}>
            <CurrenciesBar>
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
            </CurrenciesBar>
            <div>
              <InputsBar>
                <Input
                  inputName="Price:"
                  identifier="price"
                  placeholder="Purchase price"
                />
                <Input
                  inputName="Cash:"
                  identifier="cash"
                  placeholder="Client money"
                />
                <Button
                  style={{
                    width: "22em",
                    padding: "0.5em",
                    backgroundColor: "#0a0a23",
                    borderColor: "#f5f6f7",
                  }}
                  type="submit"
                >
                  CALCULATE CHANGE
                </Button>
              </InputsBar>
              <Result style={{ padding: "0.3em", margin: "0 auto" }}>
                <div>
                  <p>Status:{result.status}</p>
                  <p>Change:[{result.change}]</p>
                </div>
              </Result>
            </div>
          </Form>
        </Div>
      </Main>
    </>
  );
};
