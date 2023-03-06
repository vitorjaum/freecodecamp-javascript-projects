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

const Indent = styled.span`
  text-decoration: overline;
`;

const Div = styled.div``;

export const RomanConverter: React.FC = () => {
  const [result, setResult] = useState<string | JSX.Element>("Result:");
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

  function inputHandler(num: React.ChangeEvent<HTMLInputElement>) {
    let inputValue = Number(num.target.value);

    if (inputValue > 0) {
      if (inputValue >= 4000) {
        setResult(getThousands(inputValue));
        setStyle("default");
      } else {
        setStyle("default");
        setResult(`Result: ${getRomanNumber(inputValue)}`);
      }
    } else if (inputValue !== 0) {
      setStyle("redMessage");
      setResult("only numbers");
    } else {
      setStyle("default");
      setResult("Result:");
    }
  }

  function getThousands(thousandValue: number) {
    const digit = String(thousandValue);
    let thousandChar = "";

    if (digit.length === 4) {
      thousandChar = getRomanNumber(Number(digit.slice(0, 1)));
    }
    if (digit.length === 5) {
      thousandChar = getRomanNumber(Number(digit.slice(0, 2)));
    }
    if (digit.length === 6) {
      thousandChar = getRomanNumber(Number(digit.slice(0, 3)));
    }
    if (digit.length === 7) {
      thousandChar = getRomanNumber(Number(digit.slice(0, 4)));
    }
    return (
      <p>
        Result: <Indent>{thousandChar}</Indent>
        {getRomanNumber(Number(digit.slice(-3)))}
      </p>
    );
  }

  function getRomanNumber(inputValue: number) {
    let result = "";
    for (let i = 0; i < romanValues.length; i++) {
      if (inputValue >= romanValues[i]) {
        result += romanChar[i];
        inputValue = inputValue - romanValues[i];
        i = i - 1;
      }
    }
    return result;
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
          <Input inputName="Number:" inputHandler={(e) => inputHandler(e)} />
          <Result style={{ maxWidth: "25em" }} messageTheme={style}>
            {result}
          </Result>
        </Div>
      </Main>
    </>
  );
};
