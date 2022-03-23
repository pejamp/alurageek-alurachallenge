import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/home";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
