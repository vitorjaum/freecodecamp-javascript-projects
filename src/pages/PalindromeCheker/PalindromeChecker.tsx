import { InputTxt, Title, Header, Main, Result } from "components";
import { useState } from "react";

export const PalindromeChecker = () => {
  const [result, setResult] = useState("");
  const [newStyle, setNewStyle] = useState("");

  const inputHandler = (str: string) => {
    const word = str.toLowerCase().match(/[a-z0-9]/gi);
    const reverseWord = word && [...word];
    let isPalindrome = true;
    reverseWord?.reverse();
    console.log({ reverseWord });
    if (str == "") {
      setNewStyle(`default`);
    }

    word?.map((char, idx) => {
      if (isPalindrome) {
        if (char !== reverseWord?.[idx]) {
          setResult("Palindromen't");
          setNewStyle("redMessage");
          isPalindrome = false;
        } else {
          setNewStyle("greenMessage");
          setResult("Palindrome");
        }
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
            inputName={"Palavra:"}
            inputHandler={(e) => inputHandler(e.target.value)}
          />
          <Result messageTheme={newStyle}>
            <p>Result:{result}</p>
          </Result>
        </div>
      </Main>
    </>
  );
};
