import {
  Header,
  Input,
  Title,
  Result,
  ChallengeLink,
  ChallengeDescription,
} from "components";
import { useState } from "react";
import styled from "styled-components";
import { RomanNumeral } from "./helpers/RomanNumeral";

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Div = styled.div``;

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

  function convertToRoman(num: React.ChangeEvent<HTMLInputElement>) {
    let inputValue = Number(num.target.value);
    let result = "";
    if (inputValue > 0) {
      if (inputValue > 100000) {
        getThousands(inputValue);
      } else {
        for (let i = 0; i < romanValues.length; i++) {
          if (inputValue >= romanValues[i]) {
            result += romanChar[i];
            inputValue = inputValue - romanValues[i];
            i = i - 1;
          }
        }
        setStyle("default");
        setResult(`Result: ${result}`);
      }
    } else if (inputValue !== null) {
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
      <Title style={{ textAlign: "center" }}>Roman Numeral Converter</Title>
      <Main>
        <ChallengeDescription>
          <p>This project convert the given number into a roman numeral.</p>
          <p>Check the schedule</p>
          <RomanNumeral />
        </ChallengeDescription>
        <Div>
          <Input inputName="Number:" inputHandler={(e) => convertToRoman(e)} />
          <Result messageTheme={style}>
            <p>{result}</p>
          </Result>
        </Div>
      </Main>
    </>
  );
};
