import { useContext, useEffect, useState } from "react";
import { shoppingCartContext } from "../../context/shoppingCartContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Table, TableHeader, TableRow, TableCell, CheckoutButton, H1, ClearCartButton, CartButtonsDiv, TotalPriceText } from '../../styles/pages/Cart/styles';

export default function Cart () {

  const { cartItems, clearCart } = useContext(shoppingCartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const showTotalPrice = () => {
      const totalPrice = cartItems.reduce((accumulatedPrice, currentItem) => {
        return accumulatedPrice + currentItem.price;
      }, 0);
      return totalPrice;
    };

    const calculatedTotalPrice = showTotalPrice();
    setTotalPrice(calculatedTotalPrice);
  }, [cartItems]);

  return (
    <div>
      <Header />
      <br />
      <H1>Carrinho</H1>
      { cartItems.length > 0 ? (
        <>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Produto</TableHeader>
                <TableHeader>Preço</TableHeader>
                <TableHeader>Imagem</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <img src={item.imageUrl} alt={item.title} width={50} height={50}/>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <CartButtonsDiv>
          <CheckoutButton>Checkout</CheckoutButton>
          <ClearCartButton onClick={clearCart}>Limpar carrinho</ClearCartButton>
        </CartButtonsDiv>
        </>
      ) : (
        <>
          <br/>
          <TotalPriceText>Sem produtos no carrinho!</TotalPriceText>
          <br />
        </>
      )}
      <TotalPriceText>{`Valor total: R$ ${totalPrice}`}</TotalPriceText>
      <Footer id='contato' />
    </div>
  );
};