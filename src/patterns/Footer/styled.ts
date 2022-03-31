import styled from "styled-components";

interface FlexProps {
  align?: string;
  spacing?: string;
}

export const Container = styled.footer`
  display: block;
  background-color: ${({ theme }) => theme.superLightBlue};
`;

export const Top = styled.div`
  padding: 1rem;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    padding: 2rem;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 4rem 0;
    max-width: 1136px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
  }
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.white};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    gap: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 7rem;
  }
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align};
  gap: ${({spacing}) => spacing || '1rem'};

  @media screen and (min-width: 768px) {
    align-items: stretch;
  }
  @media screen and (min-width: 1024px) {
    &.row {
      flex-direction: row;
      gap: 0;
    }
  }
`;

export const Text = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.black100};
  font-weight: 500;
  line-height: 19px;
`;