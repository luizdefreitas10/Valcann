import AboutUs from "../../components/AboutUs/AboutUs";
import {
  H1,
  CardContainer,
} from "../../styles/components/Content/styles";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <br />
      <H1 id="serviços">Conheça nossos serviços</H1>
      <br />
      <CardContainer>
        <Card />
      </CardContainer>
      <Footer id="contato" />
    </div>
  );
}
