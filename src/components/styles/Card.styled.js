import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 2.1em 0;
  padding: 2.5em;
  flex-direction: ${({ layout }) => layout || "row"};
  text-align: center;
  img {
    width: 20em;
  }
  & > div {
    flex: 1;
  }
  p,
  h2 {
    font-family: "Poppins", sans-serif;
  }
  h2 {
    color: var(--very-dark-cyan);
  }
  p {
    color: var(--grayish-blue);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    h2 {
      padding: 2.5em 0 1.1em 0;
    }
  }
`;
