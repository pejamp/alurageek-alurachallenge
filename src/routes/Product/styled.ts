import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Highlight = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 2rem;
    flex-direction: row;
    gap: 1rem;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1136px;
    margin: 0 auto;
    padding: 0;
    padding-top: 4rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 157px;
    flex: 0 0 254px;
  }
  @media screen and (min-width: 1024px) {
    height: 403px;
    flex: 0 0 560px;
  }
`;

export const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    padding: 0;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

export const Price = styled.span`
  font-weight: 700;
  color: ${({theme}) => theme.black100};
`;

export const Text = styled.p`
  color: ${({theme}) => theme.black100};
  font-size: 0.875rem;
  text-align: left;
  line-height: 16px;

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
    line-height: 19px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;