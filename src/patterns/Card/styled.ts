import styled from "styled-components";

export const Container = styled.article`
  min-width: 156px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 174px;
  object-fit: cover;
`;

export const Text = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme}) => theme.black100};
`;

export const Price = styled.span`
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme}) => theme.black100};
  line-height: 19px;
`;