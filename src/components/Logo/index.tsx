import styled from "styled-components";
import logoImg from "../../assets/logo-default.svg";

const Wrapper = styled.div`
  width: 100px;
  height: 28px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

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
