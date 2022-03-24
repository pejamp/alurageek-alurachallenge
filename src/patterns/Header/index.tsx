import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { SearchBar } from "../../components/SearchBar";
import { Wrapper } from "./styled";

export function Header() {
  return (
    <Wrapper>
      <Logo />
      <Button>Login</Button>
      <SearchBar />
    </Wrapper>
  );
}
