import { Icon } from "components";
import styled from "styled-components";

const FooterComp = styled.footer`
  background-color: #2a2a40;
  width: 100%;
  font-family: "Hack-ZeroSlash", monospace;
  color: #dfdfe2;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  justify-content: center;
`;

const Li = styled.li``;

const A = styled.a``;

const Section = styled.section`
  padding: 1em;
  max-width: 40em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

export const Footer = () => {
  return (
    <FooterComp>
      <Section style={{ borderBottom: "0.5px solid gray" }}>
        <p>
          This website adopts the visual identity of freecodecamp. It does not
          intend to expose answers or solutions, but to present a front-end for
          projects. Made with Typescript and React.
        </p>
      </Section>
      <Section>
        <Ul>
          <Li>
            <A href="https://github.com/vitorjaum">
              <Icon variant="github"></Icon>
            </A>
          </Li>
          <Li>
            <A href="https://www.linkedin.com/in/jo%C3%A3o-vitor-pinheiro-dos-santos-3b27bb19b/">
              <Icon variant="linkedin"></Icon>
            </A>
          </Li>
        </Ul>
        <A
          href="https://github.com/vitorjaum/freecodecamp-javascript-projects"
          style={{ textDecoration: "underline" }}
        >
          Project repository
        </A>
      </Section>
    </FooterComp>
  );
};
