import { Headers } from "components/Headers";
import { Outlet } from "react-router-dom";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import { Footer } from "components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Headers />
      <Outlet />
      <Footer />

      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
