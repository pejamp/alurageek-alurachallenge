import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
    padding-top: 4rem;
    max-width: 1136px;
    margin: 0 auto;

    &:last-of-type {
      padding-bottom: 4rem;
    }
  }
`;