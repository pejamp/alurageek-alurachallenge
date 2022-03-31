
import { Footer } from "./patterns/Footer";
import { Header } from "./patterns/Header";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/home";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
