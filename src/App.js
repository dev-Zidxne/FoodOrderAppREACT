import { Fragment, useState } from "react";
import Header from "./Layout/Header";
import HeaderCartButton from "./Layout/HeaderCartButton";
import Meals from "./Meals/Meals";
import Cart from "./components/Cart/Cart";

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
      <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />

        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
