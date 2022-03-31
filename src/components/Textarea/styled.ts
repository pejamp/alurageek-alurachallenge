import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.black30};
  border-radius: 4px;
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.black100};
  line-height: 20px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.black50};
  }
`;