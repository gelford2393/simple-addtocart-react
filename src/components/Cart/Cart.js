import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = ({ hideCart }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const addAmount = (item) => {
    cartCtx.addToCart({ ...item, amount: 1 });
  };
  const removeAmount = (id) => {
    cartCtx.removeFromCart(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cart) => {
        return (
          <CartItem
            key={cart.id}
            price={cart.price}
            amount={cart.amount}
            name={cart.name}
            onAdd={addAmount.bind(null, cart)}
            onRemove={removeAmount.bind(null, cart.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={hideCart} className={classes["button-alt"]}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
