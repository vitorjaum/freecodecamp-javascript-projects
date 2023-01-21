import { Header, InputTxt, Main, Select, Title } from "components";
import { SetStateAction, useState } from "react";

function telephoneCheck(str: string) {
  let result = false;
  let phoneNumber = str;

  const firstRegex = /^1?\s?\d{3}-\d{3}-\d{4}/.test(phoneNumber);
  const secondRegex = /^1?\s?\d{3}\s\d{3}\s\d{4}/.test(phoneNumber);
  const thirdRegex = /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}/.test(phoneNumber);
  const fourthRegex = /^1?\s?\d{10}$/.test(phoneNumber);

  if (firstRegex) result = true;
  if (secondRegex) result = true;
  if (thirdRegex) result = true;
  if (fourthRegex) result = true;
  return result;
}

telephoneCheck("(555)555-5555");

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

const fifthRegex = (val: string) => {
  // 1 555 555 5555
  return val
    .replace(/\D/g, "")
    .replace(/\1/, "$1")
    .replace(/(\d{3})(\d)/, "$1 $2")
    .replace(/(\d{3})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1");
};

export const TelephoneValidator = () => {
  const [mask, setMask] = useState("firstRegex");
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("555-555-5555");

  const inputValidator = (str: any, mask: string) => {
    switch (mask) {
      case "555-555-5555":
        return firstRegex(str);
      case "(555)555-5555":
        return secondRegex(str);
      case "555 555 5555":
        return thirdRegex(str);
      case "5555555555":
        return fourthRegex(str);
      case "1 555 555 5555":
        return fifthRegex(str);
      default:
        return firstRegex(str);
    }
  };

  return (
    <>
      <Header />
      <Main>
        <Title>Telephone Number Validator</Title>
        <div>
          <InputTxt
            inputName="Phone Number"
            inputHandler={(e: any) =>
              setValue(inputValidator(e.target.value, mask))
            }
            placeholder={placeholder}
            value={value}
          />

          <Select onChange={(e) => setMask(e.target.value)}>
            <option value="555-555-5555">555-555-5555</option>
            <option value="(555)555-5555">(555)555-5555</option>
            <option value="555 555 5555">555 555 5555</option>
            <option value="5555555555">5555555555</option>
            <option value="1 555 555 5555">1 555 555 5555</option>
          </Select>
        </div>
      </Main>
    </>
  );
};
