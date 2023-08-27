import { CartBtn, IconContainer, Text, CartIcon } from "../../styles/components/AddToCartButton/styles";
import { useContext } from "react";
import { shoppingCartContext } from "../../context/shoppingCartContext";


export default function AddToCartButton({ serviceDetail }) {

  const { addToCart } = useContext(shoppingCartContext);

  return (
    <CartBtn onClick={() => addToCart(serviceDetail)}>
      <IconContainer>
        <CartIcon />
      </IconContainer>
      <Text>Adicionar ao carrinho</Text>
    </CartBtn>
  );
}
