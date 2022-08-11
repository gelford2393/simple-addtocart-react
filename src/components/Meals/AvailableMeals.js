import React from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
const AvailableMeals = ({ dummyMeals }) => {
  const listOfMeals = dummyMeals.map((meal, i) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{listOfMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
