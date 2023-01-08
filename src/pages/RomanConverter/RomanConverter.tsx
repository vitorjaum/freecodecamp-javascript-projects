import { Header, InputTxt, Title, Result } from "components";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RomanConverter: React.FC = () => {
  const [result, setResult] = useState("Result:");
  const [style, setStyle] = useState("");
  const romanChar: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const romanValues: number[] = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];

  function convertToRoman(num: number | any) {
    let number = "";
    if (num > 0 && num !== "") {
      for (let i = 0; i < romanValues.length; i++) {
        if (num >= romanValues[i]) {
          number += romanChar[i];
          num = num - romanValues[i];
          i = i - 1;
        }
      }
      setStyle("default");
      setResult(`Result: ${number}`);
    } else {
      setStyle("redMessage");
      setResult("only numbers above 0");
    }
    num == "" && setStyle("default");
  }

  return (
    <>
      <Header />
      <Main>
        <Title>Roman Numeral Converter</Title>
        <div>
          <InputTxt inputHandler={(e: any) => convertToRoman(e.target.value)} />
          <Result messageTheme={style}>{result}</Result>
        </div>
      </Main>
    </>
  );
};
