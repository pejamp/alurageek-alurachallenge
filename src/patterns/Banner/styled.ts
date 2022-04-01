import styled from "styled-components";

interface Props {
  image?: string;
}

export const Background = styled.div<Props>`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0 , 0), rgba(0, 0, 0, 0.8)), url('${({image}) => image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 192px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    height: 352px;
    padding: 2rem;
    gap: 1rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 2rem 0;
  }
`;

export const Box = styled.div`
  width: 119px;

  @media screen and (min-width: 1024px) {
    width: 130px;
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme}) => theme.white};
  line-height: 16px;

  @media screen and (min-width: 768px) {
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 26px;
  }
`;

export const Description = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
`;