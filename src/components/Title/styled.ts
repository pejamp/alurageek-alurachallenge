import styled from "styled-components";

interface Props {
  level?: number;
}

export const Heading = styled.div.attrs<Props>(({ level }) => ({
  as: 'h' + level
}))<Props>`
  font-weight: 700;
  color: ${({theme}) => theme.black100};

  &.highlight {
    font-size: 1.375rem;
    line-height: 26px;
    color: ${({theme}) => theme.white};

    @media screen and (min-width: 768px) {
      font-size: 3.25rem;
      line-height: 61px;
    }
  }

  &.section {
    font-size: 1.375rem;

    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  &.product {
    font-weight: 500;
    font-size: 1.375rem;

    @media screen and (min-width: 1024px) {
      font-size: 3.25rem;
      line-height: 60px;
    }
  }
`;

Heading.defaultProps = {
  level: 1
}