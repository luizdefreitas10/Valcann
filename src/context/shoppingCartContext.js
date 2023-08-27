import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

const shoppingCartContext = createContext({});

function ShoppingCartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const clearCart = () => {
    toast.error('Todos os produtos foram removidos do carrinho.');
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