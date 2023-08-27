import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

const shoppingCartContext = createContext({});

function ShoppingCartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const getCartItemsFromLocalStorage = () => {
    const localStorageCartItems = localStorage.getItem("cartItems");
    return localStorageCartItems ? JSON.parse(localStorageCartItems) : [];
  };

  const addProductToLocalStorage = (product) => {
    const cartItems = getCartItemsFromLocalStorage();
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    addProductToLocalStorage(product);
    toast.success('Produto adicionado ao carrinho com succeso!');
  };


  const clearCart = () => {
    toast.error('Todos os produtos foram removidos do carrinho.');
    setCartItems([]);
  };

  return (
    <shoppingCartContext.Provider
      value={{ cartItems, setCartItems, clearCart, menuIsOpen, setMenuIsOpen, addToCart, getCartItemsFromLocalStorage}}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export { shoppingCartContext, ShoppingCartProvider };