import {
  Button,
  ChallengeLink,
  Header,
  Input,
  Main,
  Select,
  Title,
} from "components";
import { useState } from "react";

const firstRegex = (val: string) => {
  // 555-555-5555
  return val
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(\d{4})(\d)/, "$1");
};

const secondRegex = (val: string) => {
  // (555)555-5555
  return val
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "($1) $2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(\d{4})(\d)/, "$1");
};

const thirdRegex = (val: string) => {
  // 555 555 5555
  return val
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1 $2")
    .replace(/(\d{3})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1");
};

const fourthRegex = (val: string) => {
  // 5555555555
  return val.replace(/\D/g, "").replace(/(\d{10})(\d)/, "$1");
};

export const TelephoneValidator = () => {
  const [mask, setMask] = useState("firstRegex");
  const [value, setValue] = useState("");
  const [codeCond, setCodeCond] = useState(false);
  const [placeholder, setPlaceholder] = useState("555-555-5555");
  const codeCountry = "1 ";

  const inputValidator = (str: string, mask: string) => {
    if (codeCond) {
      str = str.slice(2);
    }
    switch (mask) {
      case "555-555-5555":
        return firstRegex(str);
      case "(555)555-5555":
        return secondRegex(str);
      case "555 555 5555":
        return thirdRegex(str);
      case "5555555555":
        return fourthRegex(str);
      default:
        return firstRegex(str);
    }
  };

  const selectHandler = (value: string) => {
    setPlaceholder(value);
    setMask(value);
  };
  const bannerItems = [
    "Tephone Number Validator",
    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator",
  ];
  return (
    <>
      <Header />
      <ChallengeLink itemsList={bannerItems} />
      <Main>
        <Title>Telephone Number Validator</Title>
        <div>
          <Input
            inputName="Phone Number"
            inputHandler={(e) => setValue(inputValidator(e.target.value, mask))}
            placeholder={placeholder}
            value={`${codeCond ? codeCountry : ""}${value}`}
          />
          <Button onClick={() => setCodeCond(!codeCond)}>Country Code</Button>
          <Select onChange={(e) => selectHandler(e.target.value)}>
            <option value="555-555-5555">555-555-5555</option>
            <option value="(555)555-5555">(555)555-5555</option>
            <option value="555 555 5555">555 555 5555</option>
            <option value="5555555555">5555555555</option>
          </Select>
        </div>
      </Main>
    </>
  );
};
