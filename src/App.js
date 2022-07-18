import { useState } from "react";
import Header from "./components/Cart/Layout/Header";
import HeaderCartButton from "./components/Cart/Layout/HeaderCartButton";
import Meals from "./Meals/Meals";
import Cart from "./components/Cart/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />

        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
