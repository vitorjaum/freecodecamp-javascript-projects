import {
  Input,
  Title,
  Header,
  Result,
  ChallengeLink,
  ChallengeDescription,
  Footer,
  Main,
} from "components";
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
    if (str == "") {
      setResult("");
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
        <ChallengeDescription>
          <p>
            A palindrome is a word or sentence that's spelled the same way both
            forward and backward, ignoring punctuation, case, and spacing.
          </p>
          <p>
            This project checks the word or sentence and return a message saying
            if is palindrome or not. And you can choose if words can had
            symbols. Small details that differentiate it from the original
            challenge
          </p>
        </ChallengeDescription>
        <div>
          <Input
            placeholder=""
            inputName="Word or sentence:"
            inputHandler={(e) => inputHandler(e.target.value)}
          />
          <Result messageTheme={newStyle}>Result:{result}</Result>
        </div>
      </Main>
      <Footer />
    </>
  );
};
