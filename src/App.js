import Header from "./layout/Header";
import { useState } from "react";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const closeModal = () => {
    setShowCart(false);
  };
  const openModal = () => {
    setShowCart(true);
  };
  return (
    <CartProvider>
      <Cart showCart={showCart} closeCart={closeModal}></Cart>
      <Header openCart={openModal}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
