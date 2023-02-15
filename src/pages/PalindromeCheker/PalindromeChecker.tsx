import { Input, Title, Header, Main, Result, ChallengeLink } from "components";
import { useState } from "react";

export const PalindromeChecker = () => {
  const [result, setResult] = useState("");
  const [newStyle, setNewStyle] = useState("");
  const bannerItems = [
    "Palindrome Checker",
    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker",
  ];
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
      <ChallengeLink itemsList={bannerItems} />
      <Main>
        <Title>Palindrome checker:</Title>
        <div>
          <Input
            placeholder="Word"
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
