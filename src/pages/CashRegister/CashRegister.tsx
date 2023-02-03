import { Button, Header, InputTxt, Main, Result } from "components";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CashButton } from "./CashButton";

interface changeProps {
  status: string;
  change: any[];
}

function checkCashRegister(price: number, cash: number, cid: any[]) {
  let change: changeProps = { status: "", change: [] };
  let troco: any = cash - price;
  let registerCash = 0;
  const currenciesValues = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

  cid.reverse();
  cid.map((coin: number[]) => {
    registerCash += coin[1];
  });

  if (troco === registerCash) {
    cid.reverse();
    change = { status: "CLOSED", change: cid };
    return change;
  }
  if (troco > registerCash) {
    change = { status: "INSUFFICIENT_FUNDS", change: [] };
    return change;
  }

  change.status = "OPEN";
  cid.map((coinInfo, idx) => {
    if (coinInfo[1] > 0) {
      if (troco - coinInfo[1] >= 0) {
        change.change.push(coinInfo);
        console.log({ troco1: troco });
        troco = (troco - coinInfo[1]).toFixed(2);
      } else {
        const listSize = Math.ceil(coinInfo[1] / currenciesValues[idx]);
        let thisCoins = 0;
        const coinList = Array(listSize).fill(currenciesValues[idx]);
        coinList.map((coin) => {
          if (coin <= troco) {
            troco = (troco - coin).toFixed(2);
            thisCoins += coin;
          }
        });
        thisCoins > 0 && change.change.push([coinInfo[0], thisCoins]);
      }
    }
  });
  if (troco != 0) {
    change = { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return change;
}

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);

const CashBar = styled.div`
  display: flex;

  background-color: #0a0a23;
  gap: 9px;
  padding: 5px;
`;

// const Cash

export const CashRegister = () => {
  ////////////// example
  const priceExample = 19.5;
  const clientCashExample = 20;
  const registerCashExample = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ];
  // console.log(
  //   checkCashRegister(priceExample, clientCashExample, registerCashExample)
  // );
  //////////////////

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

  const registerCash: any = {
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

  return (
    <>
      <Header />
      <Main>
        <CashBar>
          {Object.keys(registerCash).map((coinName: string, idx) => {
            const coinValue = coinTable[coinName];

            return (
              <CashButton
                coinName={coinName}
                coinValue={coinValue}
                key={idx}
                registerCash={registerCash}
              />
            );
          })}
        </CashBar>
        <div>
          <div>
            <InputTxt inputName="Preço" placeholder="Preço da compra" />
            <InputTxt inputName="Dinheiro" placeholder="DInheiro do cliente" />
            <button onClick={() => console.log(registerCash)}>
              vascoooooooo
            </button>
          </div>
          <Result>Result: {[registerCash.PENNY]}</Result>
        </div>
      </Main>
    </>
  );
};
