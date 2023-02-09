import styled from "styled-components";

const Ol = styled.ol`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  list-style: none;
  width: 100%;
  color: #dfdfe2;
  border: #3b3b4f solid 0.1em;
`;

const LeftLi = styled.li`
  width: 70%;
  display: flex;
  justify-content: center;
  background-color: #3b3b4f;
`;

const RightLi = styled.li`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const Div = styled.div`
  width: 100%;
  padding: 0.7em;
`;

const Link = styled.a`
  margin: auto;
  font-family: "Hack-ZeroSlash", monospace;
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.div`
  border-bottom: 0.75rem solid transparent;
  border-inline-start: 0.65rem solid #3b3b4f;
  border-top: 0.75rem solid transparent;
  height: 100%;
`;

type ChallengeLinkProps = {
  itemsList: string[][];
};

export const ChallengeLink = ({ itemsList }: ChallengeLinkProps) => {
  const firstLi = itemsList?.[0];
  const secondLi = itemsList?.[1];
  return (
    <Div>
      <Ol>
        <LeftLi>
          <Link href={firstLi[1]}>{firstLi[0]}</Link>
        </LeftLi>
        <Arrow />
        <RightLi>
          <Link href={secondLi[1]}>{secondLi[0]}</Link>
        </RightLi>
      </Ol>
    </Div>
  );
};
