import { InputTxt, Title, Header } from "components";
import { useState } from "react";
import styled from "styled-components";

type ResultProps = {
  true?: string;
  fase?: string;
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px 0;
  padding: 0.5em;
`;

const Result = styled.div<ResultProps>`
  background-color: grey;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f6f7;
  border: 3px solid;
  margin: 0.5em 0;
  ${(props) => props.true}
`;

export const PalindromeChecker = () => {
  const [result, setResult] = useState("");
  const [newStyle, setNewStyle]: any = useState();

  const checkWord = (str: string) => {
    const word = str.toLowerCase().match(/[a-z0-9]/gi);
    const reverseWord = word && [...word]?.reverse();

    str == "" && setNewStyle(`background-color: grey`);
    word?.map((char, idx) => {
      if (char !== reverseWord?.[idx]) {
        setResult("Palindromen't");
        setNewStyle(`background-color: #ffadad; color: #850000;`);
      } else {
        setNewStyle(`background-color: #cbffad; color: #008500;`);
        setResult("Palindrome");
      }
    });
  };

  return (
    <>
      <Header />
      <Main>
        <Title>Palindrome checker:</Title>
        <div>
          <InputTxt
            inputName={"Palavra"}
            inputHandler={(e: any) => checkWord(e.target.value)}
          />
          <Result true={newStyle}>
            <p>{result}</p>
          </Result>
        </div>
      </Main>
    </>
  );
};
