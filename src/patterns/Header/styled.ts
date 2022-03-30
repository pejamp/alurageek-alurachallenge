import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
    grid-template-columns: 1fr auto;
    //gap: 8.375rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 2rem 9.5rem;
    grid-template-columns: 1fr auto;
    //gap: 8.375rem;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  padding-left: 1rem;
`; 

export const Flex = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
`;
