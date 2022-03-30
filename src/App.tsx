
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
