import styled from "styled-components";

const HeaderSite = styled.header`
  background-color: #0a0a23;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38px;
`;

const Logo = styled.img`
  display: block;
  height: 24px;
  margin: 7px 0;
  /* width: auto; */
`;

const Title = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f5f6f7;
  gap: 0 5px;
  font-size: 1.5rem;
`;

export const Header = () => {
  return (
    <HeaderSite>
      <Title href="/freecodecamp-javascript-projects">
        <p>Desafios FreeCodeCamp</p>
        <Logo src="logo.jpg" alt="" />
      </Title>
    </HeaderSite>
  );
};
