import { useEffect, useState } from "react/cjs/react.development";
import Mattress from "./components/Mattress";
import NavBar from "./components/NavBar";
import { CartContextProvider } from './utils/cartContext';

const App = () => {
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  useEffect(() => {
    setNumberOfProducts(parseInt(localStorage.getItem('numberOfProducts'), 10) || 0);
  }, []);

  const increaseNumberOfProducts = () => {
    localStorage.setItem('numberOfProducts', numberOfProducts + 1);
    setNumberOfProducts(numberOfProducts + 1);
  }

  return (
    <>
      <CartContextProvider
        value={{
          cartNumber: numberOfProducts,
          increaseCartNumber: increaseNumberOfProducts
        }}
      >
        <NavBar />
        
        <div className="app-content">
          <Mattress />
        </div>
      </CartContextProvider>
    </>
  );
}

export default App;
