import logoImg from "../../assets/logo-default.svg";
import { Image, Wrapper } from "./styled";

interface LogoProps {
  footer?: boolean;
}

export function Logo({ footer } :LogoProps) {
  return (
    <Wrapper className={footer ? 'footer' : ''}>
      <Image
        src={logoImg}
        alt={"Um Joystick ao lado do nome AluraGeek que dá nome à loja"}
      />
    </Wrapper>
  );
}
