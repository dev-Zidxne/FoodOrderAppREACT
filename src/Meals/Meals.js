import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
import Card from "../UI/Card";
import CartProvider from "../store/CartProvider";

const Meals = () => {
  return (
    <CartProvider>
      <MealsSummary />

      <AvailableMeals />
    </CartProvider>
  );
};
export default Meals;
