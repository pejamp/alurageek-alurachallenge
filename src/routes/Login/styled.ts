import styled from "styled-components";

export const Container = styled.div`
  padding-top: 6rem;
  padding-bottom: 4.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 275px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-top: 2.8rem;
    padding-bottom: 3.75rem;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 5.6rem;
    padding-bottom: 5.6rem;
    max-width: 423px;
    gap: 1.5rem;
  }
`;

export const Box = styled.div`
  width: 109px;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;