import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { ShoppingCartProvider } from './context/shoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <GlobalStyles />
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>
);
