import styled from "styled-components";
// export const Flex = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 1em 0;
//   & > div,
//   & > ul {
//     flex: 1;
//   }
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  & > div,
  & > ul {
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;
