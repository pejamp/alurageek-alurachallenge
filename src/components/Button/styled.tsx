import styled from "styled-components";

export const Box = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.darkBlue};
  border: 1px solid ${({ theme }) => theme.darkBlue};
  padding: 12px 47.5px;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }

  @media screen and (min-width: 768px) {
    padding: 12px 64px;
  }
`;
