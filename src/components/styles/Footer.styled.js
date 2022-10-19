import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--very-dark-cyan);
  color: #fff;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
    text-align: left;
  }
  p {
    text-align: center;
  }
  ul {
    padding: 0 1em;
    width: 100%;
  }

  img {
    width: 11em;
    margin: 1em 0;
  }
  span {
    padding-right: 0.6em;
  }
  a {
    color: #fff;
    cursor: pointer;
  }
`;

export const StyledFooterCard = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: var(--very-dark-cyan);
  border-radius: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5em auto;
  margin-bottom: -3.5em;
  z-index: 1;
  position: relative;
  width: 90%;
  height: 9em;
  background-color: #fff;
  p {
    padding: 1em 0;
    margin-bottom: 1em;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 40%;
  }
`;
