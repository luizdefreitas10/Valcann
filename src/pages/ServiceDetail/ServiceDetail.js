import { useNavigate, useParams } from "react-router-dom";
import { services } from "../../mocks/Cards/cards";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ServiceDetailContainer, DetailsContainer, ServiceDetailWrappper } from "../../styles/pages/ServiceDetail/styles";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

export default function ServiceDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const serviceDetail = services.find((service) => service.id === id);

  return (
    <ServiceDetailWrappper>
      <Header />
      <MdOutlineKeyboardBackspace onClick={() => navigate('/')} width={250} height={250}/>
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
      <Footer id='contato' />
    </ServiceDetailWrappper>
  );
}
