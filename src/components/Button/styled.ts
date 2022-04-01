import styled from "styled-components";

export const Box = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.darkBlue};
  border: 1px solid ${({ theme }) => theme.darkBlue};
  padding: 12px 16px;
  width: 100%;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;
  }

  &.fill {
    color: ${({ theme }) => theme.white};
    border: none;
    background-color: ${({ theme }) => theme.darkBlue};
  }
`;
