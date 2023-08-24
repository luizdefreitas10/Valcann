import {
  FooterContainer,
  RightFooter,
  LeftFooter,
  CopyrightText
} from "../../styles/components/Footer/styles";
// import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        {/* <LeftFooter>
          <SocialMediaLinks />
        </LeftFooter> */}
        <RightFooter>
          <p>TechSales | Impulsionando seus negócios</p>
          <br />
          <p>www.techsales.com.br</p>
          <br />
          <p>+55(81)3333-3333</p>
          <br />
          <p>
            Avenida Boa Viagem, n4000, Empresarial Trade Center, Recife,
            Pernambuco
          </p>
          <br />
          <p>faleconosco@techsales.com.br</p>
        </RightFooter>
        <br />
      </FooterContainer>
      <CopyrightText>© 2023 · Luiz de Freitas · Todos os direitos reservados.</CopyrightText>
    </>
  );
}
