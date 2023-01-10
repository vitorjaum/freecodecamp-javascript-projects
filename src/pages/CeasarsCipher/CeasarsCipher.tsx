import { Header, InputTxt, Result, Title } from "components";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px 0;
  padding: 0.5em;
`;

export const CeasarsCipher = () => {
  const [result, setResult] = useState("");

  function rot13(str: string) {
    const upperStr = str.toUpperCase();
    const strList = upperStr.split("");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let newStr = "";

    strList.map((char) => {
      const currentCode = char.charCodeAt(0) - 65;

      if (currentCode <= 25 && currentCode >= 0) {
        if (currentCode + 13 <= 25) {
          newStr += alphabet[currentCode + 13];
        } else {
          const newCode = currentCode + 13 - 26;
          newStr += alphabet[newCode];
        }
      } else {
        newStr += char;
      }
    });

    return newStr;
  }

  return (
    <>
      <Header />
      <Main>
        <Title>Caesars Cipher</Title>
        <div>
          <InputTxt
            inputName="Word:"
            inputHandler={(e) => setResult(rot13(e.target.value))}
          />
          <Result>Resultado: {result}</Result>
        </div>
      </Main>
    </>
  );
};
