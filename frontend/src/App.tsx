import { Headers } from "components/Headers";
import { Outlet } from "react-router-dom";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import { Footer } from "components/Footer";

function App() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />

      <GlobalStyles />
    </>
  );
}

export default App;
