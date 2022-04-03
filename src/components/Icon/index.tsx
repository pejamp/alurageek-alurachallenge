import styled from "styled-components";

const Image = styled.img`
  display: inline-block;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

interface IconProps {
  icon: any;
}

export function Icon({ icon }: IconProps) {
  return <Image src={icon} />;
}
