import {
  FooterContainer,
  RightFooter,
  LeftFooter,
  CopyrightText, 
  RigthFooterText
} from "../../styles/components/Footer/styles";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import StyledBackgroundDiv from "../StyledBackgroundDiv/StyledBackgroundDiv";

export default function Footer() {
  return (
    <StyledBackgroundDiv>
      <FooterContainer>
        <LeftFooter>
          <SocialMediaLinks />
        </LeftFooter>
        <RightFooter>
          <p>TechSales | Impulsionando seus negócios</p>
          <RigthFooterText>www.techsales.com.br</RigthFooterText>
          <br />
          <RigthFooterText>+55(81)3333-3333</RigthFooterText>
          <br />
          <RigthFooterText>
            Avenida Boa Viagem, n4000, Empresarial Trade Center, Recife,
            Pernambuco
          </RigthFooterText>
          <br />
          <RigthFooterText>faleconosco@techsales.com.br</RigthFooterText>
        </RightFooter>
      </FooterContainer>
      <CopyrightText>© 2023 · Luiz de Freitas Lima Neto · Todos os direitos reservados.</CopyrightText>
    </StyledBackgroundDiv>
  );
}
