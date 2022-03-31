import styled from "styled-components";

export const Container = styled.footer`
  display: block;
`;

export const Top = styled.div`
  background-color: ${({ theme }) => theme.superLightBlue};
  padding: 1rem;
  display: grid;
  gap: 2rem;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.black100};
  font-weight: 500;
  line-height: 19px;
`;