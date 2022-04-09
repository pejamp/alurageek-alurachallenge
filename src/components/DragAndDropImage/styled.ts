import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ButtonBox = styled.div`
  width: 191px;

  @media screen and (min-width: 1024px) {
    width: 239px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 134px;
  background-color: ${({theme}) => theme.white};
  border: 1px dashed ${({theme}) => theme.black30};
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.375rem;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 254px;
    height: 152px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 282px;
    height: 152px;
  }

  &.rejected {
    border: 1px solid red;
  }
  &.accepted {
    border: 1px solid green;
  }
`;

export const Info = styled.span`
  font-size: 0.875rem;
  color: ${({theme}) => theme.black80};

  @media screen and (min-width: 768px) {
    width: 190px;
    line-height: 20px;
  }
`;

export const Preview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.white};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;