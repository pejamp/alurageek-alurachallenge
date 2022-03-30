import logoImg from "../../assets/logo-default.svg";
import { Image, Wrapper } from "./styled";


export function Logo() {
  return (
    <Wrapper>
      <Image
        src={logoImg}
        alt={"Um Joystick ao lado do nome AluraGeek que dá nome à loja"}
      />
    </Wrapper>
  );
}
