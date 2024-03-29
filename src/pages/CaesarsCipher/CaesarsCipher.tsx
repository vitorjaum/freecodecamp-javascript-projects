import {
  ChallengeDescription,
  ChallengeLink,
  Emphasis,
  Footer,
  Header,
  Input,
  Main,
  Result,
  Title,
} from "components";

import { useState } from "react";

export const CaesarsCipher = () => {
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

  const bannerItems = [
    "Caesars Cipher",
    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher",
  ];

  return (
    <>
      <Header />
      <ChallengeLink itemsList={bannerItems} />
      <Title>Caesars Cipher</Title>
      <Main>
        <ChallengeDescription>
          <p>
            One of the simplest and most widely known ciphers is a Caesar
            cipher, also known as a shift cipher. In a shift cipher the meanings
            of the letters are shifted by some set amount.
          </p>
          <p>
            A common modern use is the ROT13 cipher, where the values of the
            letters are shifted by 13 places. Thus <Emphasis>A ↔ N</Emphasis>,
            <Emphasis>B ↔ O</Emphasis> and so on.
          </p>
          <p>
            This project translate texts to the caesars cipher{" "}
            <Emphasis>ROT13</Emphasis>
          </p>
        </ChallengeDescription>
        <div>
          <Input
            inputName="Word:"
            inputHandler={(e) => setResult(rot13(e.target.value))}
          />
          <Result>Result: {result}</Result>
        </div>
      </Main>
      <Footer />
    </>
  );
};
