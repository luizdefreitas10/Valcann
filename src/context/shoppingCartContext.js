import React, { createContext, useState } from "react";

const shoppingCartContext = createContext({});

function ShoppingCartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <shoppingCartContext.Provider
      value={{ cartItems, setCartItems, clearCart, menuIsOpen, setMenuIsOpen}}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export { shoppingCartContext, ShoppingCartProvider };