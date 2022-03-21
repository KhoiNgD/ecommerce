import { Headers } from "components/Headers";
import { Outlet } from "react-router-dom";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";

function App() {
  return (
    <div>
      <Headers />
      <main>
        <Outlet />
      </main>
      <GlobalStyles />
    </div>
  );
}

export default App;
