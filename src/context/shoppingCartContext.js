import React, { createContext, useState } from "react";

const shoppingCartContext = createContext({});

function ShoppingCartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <shoppingCartContext.Provider
      value={{ cartItems, setCartItems, clearCart }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export { shoppingCartContext, ShoppingCartProvider };