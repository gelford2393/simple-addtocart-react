import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import { DUMMY_MEALS } from "./DummyData";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [meals, setMeals] = useState(DUMMY_MEALS);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openCart = () => {
    setIsOpenModal(true);
  };
  const hideCart = () => {
    setIsOpenModal(false);
  };
  return (
    <CartProvider>
      <Header openCart={openCart} />
      {isOpenModal && <Cart hideCart={hideCart} />}
      <main>
        <Meals dummyData={meals} />
      </main>
    </CartProvider>
  );
}

export default App;
