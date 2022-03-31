import { Headers } from "components/Headers";
import { Outlet } from "react-router-dom";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import { Footer } from "components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "contexts/cart-context";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Headers />
        <Outlet />
      </CartProvider>
      <Footer />

      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
