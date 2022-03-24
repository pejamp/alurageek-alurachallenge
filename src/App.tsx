import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./patterns/Header";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/home";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
