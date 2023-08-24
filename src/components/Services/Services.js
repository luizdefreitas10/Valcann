import { CardContainer, Content, H1, WhyTechSalesText } from '../../styles/components/Content/styles'
import AboutUs from '../AboutUs/AboutUs';
import Card from "../Card/Card";
import Footer from '../Footer/Footer';

export default function Services () {
  return (

      <Content>
        <AboutUs />
        <br />
        <H1>Porque escolher a TechSales?</H1>
        <WhyTechSalesText>Na TechSales, fornecemos soluções tecnológicas inovadoras e confiáveis ​​para ajudá-lo a atingir seus objetivos de negócios. Nossa equipe de especialistas oferece atendimento e suporte personalizados para garantir que você aproveite ao máximo seu investimento. Com nossas soluções de tecnologia de ponta, você pode agilizar suas operações, otimizar seus processos e aprimorar a experiência do cliente.</WhyTechSalesText>
        <br/>
        <CardContainer>
          <Card />
        </CardContainer>
        <Footer />
      </Content>
  );

};