import transformingIcon from "../../assets/imgs/transformingIcon.jpeg";
import {
  Container,
  AboutUsIconContainer,
  AboutUsTextContainer,
  AboutUsH1
} from "../../styles/components/AboutUs/styles";
import CapacitingButton from "../CapacitingButton/CapacitingButton";
// import StyledBackgroundDiv from "../StyledBackgroundDiv/StyledBackgroundDiv";



export default function AboutUs() {
  return (
    <>
      <AboutUsH1>Sobre Nós</AboutUsH1>
      <br />
      <Container>
        <AboutUsIconContainer>
          <img src={transformingIcon} alt="" />
        </AboutUsIconContainer>
        <AboutUsTextContainer>
          <h1>Capacitando sua transformação digital</h1>
          <br />
          <p>
            Na TechSales, entendemos a importância da tecnologia no mundo de hoje
            e estamos aqui para fazer com que ela funcione para você. Fornecemos
            uma variedade de soluções e serviços de tecnologia personalizáveis
            ​​para ajudar empresas de todos os tamanhos a prosperar no cenário
            digital. Nossa equipe de especialistas se dedica a capacitar sua
            transformação digital.
          </p>
          <br/>
          <CapacitingButton />
        </AboutUsTextContainer>
      </Container>
    </>
  );
}
