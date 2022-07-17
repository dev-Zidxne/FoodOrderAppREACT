import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
import Card from "../UI/Card";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />

      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
