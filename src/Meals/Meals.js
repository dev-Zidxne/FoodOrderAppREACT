import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
import Card from "../UI/Card";
import CartProvider from "../store/CartProvider";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />

      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
