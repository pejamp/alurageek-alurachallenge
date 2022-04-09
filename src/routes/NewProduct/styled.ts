import styled from "styled-components";

export const Container = styled.form`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 4rem 0;
    max-width: 559px;
    margin: 0 auto;
  }
`;