import { Header } from "components/Header";
import styled from "styled-components";

const ChallengesList = styled.ul`
  margin-top: 2em;
  width: 25em;
`;

const ChallengeItem = styled.li`
  list-style-type: none;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  min-height: 80px;
  color: #f5f6f7;
  background-color: #3b3b4f;
  margin: 10px 0;
  padding: 0 10px;
  border: 5px solid #f5f6f7;
  font-weight: 400;
  font-size: 1.1rem;
  &:hover {
    background-color: #f5f6f7;
    color: #3b3b4f;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <ChallengesList>
          <ChallengeItem>
            <Link href="palindrome-checker">Verificador de palíndromo</Link>
          </ChallengeItem>
          <ChallengeItem>
            <Link href="roman-numeral-converter">
              Conversor de numerais romanos
            </Link>
          </ChallengeItem>
          <ChallengeItem>
            <Link href="ceasars-cipher"> Cifra de César</Link>
          </ChallengeItem>
          <ChallengeItem>
            <Link href="telephone-number-validator">
              Validador de Número de telefone
            </Link>
          </ChallengeItem>
          <ChallengeItem>
            <Link href="cash-register"> Caixa registradora</Link>
          </ChallengeItem>
        </ChallengesList>
      </Main>
    </>
  );
};
