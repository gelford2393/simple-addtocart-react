import React, { useRef, useState } from "react";
import Input from "../UI/Input/Input";

import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enterNumberAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enterNumberAmount < 0 ||
      enterNumberAmount > 5
    ) {
      setIsValidAmount(false);
      return;
    }
    props.onAddToCart(enterNumberAmount);
  };
  return (
    <>
      <form onSubmit={onSubmitHandle} className={classes.form}>
        <Input
          ref={inputAmountRef}
          label="Amount:"
          input={{
            id: `amount_${props.id}`,
            type: "Number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button type="submit">+ Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
