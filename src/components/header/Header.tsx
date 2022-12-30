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
  width: auto;
`;

export const Header = () => {
  return (
    <HeaderSite>
      <a href="/">
        <Logo src="logo.jpg" alt="" />
      </a>
    </HeaderSite>
  );
};
