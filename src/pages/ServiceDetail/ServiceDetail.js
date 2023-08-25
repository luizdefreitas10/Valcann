import { useParams } from "react-router-dom";
import { services } from "../../mocks/Cards/cards";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ServiceDetailContainer, DetailsContainer, Wrapper } from "../../styles/pages/ServiceDetail/styles";
import { useContext } from "react";
import { shoppingCartContext } from "../../context/shoppingCartContext";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";

export default function ServiceDetail() {
  const { id } = useParams();
  const { cartItems, setCartItems } = useContext(shoppingCartContext);

  const addToCart = (string) => {
    setCartItems([...cartItems, string]);
  };

  console.log(cartItems);

  const serviceDetail = services.find((service) => service.id === id);

  return (
    <>
      <Header />
      <ServiceDetailContainer>
        <div>
          <img src={serviceDetail.imageUrl} alt="" width={350} height={350} />
        </div>
        <DetailsContainer>
          <img src={serviceDetail.svgPath} alt="" width={150} height={150} />
          <h1>{serviceDetail.title}</h1>
          <br />
          <p>{serviceDetail.description}</p>
          <br />
          <p>{`R$ ${serviceDetail.price}`}</p>
          <br />
          <AddToCartButton serviceDetail={serviceDetail}>Adicionar ao carrinho</AddToCartButton>
        </DetailsContainer>
      </ServiceDetailContainer>
      <Footer />
    </>
  );
}
