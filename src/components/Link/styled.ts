import styled from "styled-components";

export const Wrapper = styled.a`
  color: ${({ theme }) => theme.black100};
  font-weight: 500;

  &.sectionLink {
    color: ${({ theme }) => theme.darkBlue};
    font-weight: 700;
    font-size: 0.875rem;
  }
`;