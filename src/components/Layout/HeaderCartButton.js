import React, { useContext, useState, useEffect } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../../access/svg/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = ({ openCart }) => {
  const [bumpBtn, setBumpButton] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCart = cartCtx.items.reduce((curr, acc) => {
    return curr + acc.amount;
  }, 0);
  const classBtn = `${classes.button} ${bumpBtn ? classes.bump : ""}`;
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpButton(true);
    const timer = setTimeout(() => {
      setBumpButton(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={openCart} className={classBtn}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
