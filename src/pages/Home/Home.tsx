import { Main, Header, Footer } from "components";
import { Link as RouteLink } from "react-router-dom";
import styled from "styled-components";

const ChallengesList = styled.ul`
  width: 30em;
`;

const ChallengeItem = styled.li`
  list-style-type: none;
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  min-height: 4.1em;
  color: #f5f6f7;
  background-color: #3b3b4f;
  margin: 10px 0;
  padding: 0 10px;
  border: 3px solid #f5f6f7;
  font-weight: 400;
  font-size: 1.1rem;
  &:hover {
    background-color: #f5f6f7;
    color: #3b3b4f;
  }
`;

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <ChallengesList>
          <ChallengeItem>
            <RouteLink to="/palindrome-checker">
              <Link>Palindrome checker</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/roman-numeral-converter">
              <Link>Roman numeral converter</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/caesars-cipher">
              <Link>Caesars chiper</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/telephone-number-validator">
              <Link>Telephone number validator</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/cash-register">
              <Link>Register cash</Link>
            </RouteLink>
          </ChallengeItem>
        </ChallengesList>
      </Main>
      <Footer />
    </>
  );
};
