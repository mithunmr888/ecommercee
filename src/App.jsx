import React from "react";
import classes from "./App.module.css";
import { useState } from "react";
import Headertop from "./components/layout/Headertop";
import AvailableColors from "./components/albums/AvailableColors";
import ColorFooter from "./components/albums/ColorFooter";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={closeCartHandler}></Cart>}
      <Headertop onOpen={openCartHandler}></Headertop>

      <span className={classes.span}>COLORS MUSIC...!</span>
      <main>
        <AvailableColors></AvailableColors>
      </main>
      <button className={classes.btnbtm} onClick={openCartHandler}>
        See the Cart
      </button>
      <ColorFooter></ColorFooter>
    </CartProvider>
  );
};

export default App;
