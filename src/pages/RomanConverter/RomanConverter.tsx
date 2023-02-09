import { Header, InputTxt, Title, Result, ChallengeLink } from "components";
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

    if (num > 0) {
      if (num > 100000) {
        getThousands(num);
      } else {
        for (let i = 0; i < romanValues.length; i++) {
          if (num >= romanValues[i]) {
            number += romanChar[i];
            num = num - romanValues[i];
            i = i - 1;
          }
        }
        setStyle("default");
        setResult(`Result: ${number}`);
      }
    } else if (num !== "") {
      setStyle("redMessage");
      setResult("only numbers above 0");
    } else {
      setStyle("default");
      setResult("Result:");
    }
  }

  function getThousands(thousandValue: number) {
    let thousandRoman = "";
    const thousandsChar = Array(thousandValue / 1000).fill("M");
    thousandsChar.map((char) => (thousandRoman += char));
    setResult(thousandRoman);
  }

  const bannerItems = [
    "Roman Numeral Converter",
    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter",
  ];

  return (
    <>
      <Header />
      <ChallengeLink itemsList={bannerItems} />
      <Main>
        <Title>Roman Numeral Converter</Title>
        <div>
          <InputTxt inputHandler={(e: any) => convertToRoman(e.target.value)} />
          <Result messageTheme={style}>
            <p>{result}</p>
          </Result>
        </div>
      </Main>
    </>
  );
};
