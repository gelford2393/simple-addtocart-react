import React, { useState } from "react";

import mealsImg from "./../../access/img/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ openCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ComboMeals</h1>
        <HeaderCartButton openCart={openCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  );
};

export default Header;
