import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 12px 0;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.black30};
  border-radius: 4px;
`;

export const InputStyled = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 4px 0 7px;
  background: transparent;
  color: ${({ theme }) => theme.black100};
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .labelClass {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .labelClass {
      position: absolute;
      top: 8px;
      display: block;
      transition: 0.2s;
      font-size: 0.75rem;
    }
  }

  &:required, &:invalid {
    box-shadow: none;
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 8px;
  left: 12px;
  display: block;
  transition: 0.2s;
  font-size: 0.75rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.black50};
`;
