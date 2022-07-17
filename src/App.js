import { Fragment } from "react";
import Header from "./Layout/Header";
import HeaderCartButton from "./Layout/HeaderCartButton";
import Meals from "./Meals/Meals";

function App() {
  return (
    <div>
      <Fragment>
        <Header />

        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
