import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import cardContent from "./utils/cardContent";
import FooterCard from "./components/FooterCard";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {cardContent.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <FooterCard />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
