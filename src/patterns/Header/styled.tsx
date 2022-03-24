import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;
