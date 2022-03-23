import styled from "styled-components";
import logoImg from "../../assets/logo-default.svg";

const Wrapper = styled.div`
  position: relative;
`;

export function Logo() {
  return (
    <Wrapper>
      <img
        src={logoImg}
        alt={"Um Joystick ao lado do nome AluraGeek que dá nome à loja"}
      />
    </Wrapper>
  );
}
