import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100px;
  height: 28px;

  @media screen and (min-width: 1024px) {
    width: 176px;
    height: 50px;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;