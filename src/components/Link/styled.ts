import styled from "styled-components";

export const Wrapper = styled.a`
  color: ${({ theme }) => theme.black100};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.sectionLink {
    color: ${({ theme }) => theme.darkBlue};
    font-weight: 700;
    font-size: 0.875rem;

    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;