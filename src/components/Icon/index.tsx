import styled from "styled-components";

const Image = styled.img`
  display: inline-block;
`;

interface IconProps {
  icon: any;
}

export function Icon({ icon }: IconProps) {
  return <Image src={icon} />;
}
