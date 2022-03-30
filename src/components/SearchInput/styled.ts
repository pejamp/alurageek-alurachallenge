import styled from "styled-components";

export const Wrapper = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.black05};
  border-radius: 20px;

  &.invisible {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      width: 272px;
    }
    @media screen and (min-width: 1024px) {
      display: flex;
      width: 393px;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  color: ${({ theme }) => theme.black50};
  font-size: 0.875rem;
`;