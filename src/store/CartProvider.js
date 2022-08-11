import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalAmountItems =
      state.totalAmount + action.item.price * action.item.amount;
    let cartItems;
    let updatedItems;
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    if (existingItemIndex >= 0) {
      updatedItems = {
        ...state.items[existingItemIndex],
        amount: state.items[existingItemIndex].amount + action.item.amount,
      };
      cartItems = [...state.items];
      cartItems[existingItemIndex] = updatedItems;
    } else {
      cartItems = state.items.concat(action.item);
    }

    return {
      items: cartItems,
      totalAmount: totalAmountItems,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    let cartItems;
    let updatedItems;
    let existingItem = state.items[existingItemIndex];
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        console.log(item);
        return item.id !== action.id;
      });
      cartItems = updatedItems;
    } else {
      updatedItems = { ...existingItem, amount: existingItem.amount - 1 };
      cartItems = [...state.items];
      cartItems[existingItemIndex] = updatedItems;
    }
    console.log(updatedItems);

    // if (existingItemIndex >= 0) {
    //   const updatedItems = {
    //     ...state.items[existingItemIndex],
    //     amount: state.items[existingItemIndex].amount - 1,
    //   };
    //   cartItems = [...state.items];
    //   cartItems[existingItemIndex] = updatedItems;
    // }

    const totalAmountItems = state.totalAmount - existingItem.price;
    return {
      items: cartItems,
      totalAmount: totalAmountItems,
    };
  }
  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );
  const addToCart = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeFromCart = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
