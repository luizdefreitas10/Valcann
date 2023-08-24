import { FooterContainer, RightFooter, LeftFooter } from "../../styles/components/Footer/styles";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export default function Footer () {
  return (
    <FooterContainer>
      <LeftFooter>
        <SocialMediaLinks />
      </LeftFooter>
      <RightFooter>
        <h4>TechSales | Impulsionando seus negócios</h4>
        <br/>
        <p>www.techsales.com.br</p>
        <br/>
        <p>+55(81)3333-3333</p>
        <br/>
        <p>Avenida Boa Viagem, n4000, Empresarial Trade Center, Recife, Pernambuco</p>
        <br/>
        <p>faleconosco@techsales.com.br</p>
      </RightFooter>
      <br/>
      <p>© 2023 · Luiz de Freitas · Todos os direitos reservados.</p>
    </FooterContainer>
  );
};