import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 1em 0;
  background: url("images/bg-hero-desktop.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--very-pale-cyan);
  text-align: center;
  h1,
  p {
    text-align: center;
    font-family: "Poppins", sans-serif;
  }
  h1 {
    padding: 1.5em 0;
    color: var(--very-dark-cyan);
  }
  p {
    margin-bottom: 2.1em;
  }
  div > button {
    margin-bottom: 2em;
  }
`;

export const Logo = styled.img`
  width: 10em;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: 2em;
  }
`;

export const HeroImage = styled.img`
  width: 23em;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin-left: 2em;
  }
`;
