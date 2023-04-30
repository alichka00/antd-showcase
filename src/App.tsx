import GlobalStyles from "./styles/global";
import { Header } from "./components/Header";
import { Home } from "./page/Home";

function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
