import styled from "styled-components";

export const Wrapper = styled.header`
width: 100%;
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
  }
  @media screen and (min-width: 1024px) {
    padding: 2rem 0;
    grid-template-columns: 1fr auto;
    max-width: 1136px;
    margin: 0 auto;
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
