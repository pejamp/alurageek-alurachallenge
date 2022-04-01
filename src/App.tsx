import { Banner } from "./patterns/Banner";
import { Footer } from "./patterns/Footer";
import { Header } from "./patterns/Header";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/home";
import bannerImg from "./assets/banner.png";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner backgroundImage={bannerImg} />
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
