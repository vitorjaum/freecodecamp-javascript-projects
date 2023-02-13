interface changeProps {
  status: string;
  change: any[];
}

export function checkCashRegister(price: number, cash: number, cid: any[]) {
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
