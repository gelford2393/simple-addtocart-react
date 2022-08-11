import React from "react";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = ({ dummyData }) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals dummyMeals={dummyData} />
    </>
  );
};

export default Meals;
