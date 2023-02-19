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

const Li = styled.li`
  display: flex;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  overflow: hidden;
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
  itemsList: string[];
};

export const ChallengeLink = ({ itemsList }: ChallengeLinkProps) => {
  const challengeText = itemsList?.[0];
  const challengeLink = itemsList?.[1];

  return (
    <Div>
      <Ol>
        <Li
          style={{
            backgroundColor: "#3b3b4f",
            width: "70%",
          }}
        >
          <Link
            target="_blank"
            href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
          >
            JavaScript Algorithms and Data Structures
          </Link>
        </Li>
        <Arrow />
        <Li style={{ width: "50%" }}>
          <Link target="_blank" href={challengeLink}>
            {challengeText}
          </Link>
        </Li>
      </Ol>
    </Div>
  );
};
