import styled from "styled-components";

interface Props {
  level?: number;
}

export const Heading = styled.div.attrs<Props>(({ level }) => ({
  as: 'h' + level
}))<Props>`
  font-weight: 700;
  color: ${({theme}) => theme.black100};
`;

Heading.defaultProps = {
  level: 1
}