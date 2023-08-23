import responsiveLogo from '../../assets/svgs/responsive.svg';
import { Container, TextContent } from '../../styles/components/Responsive/styles';

export default function Responsive () {
  return (
    <Container>
      <TextContent>
        <h1>PÁGINAS RESPONSIVAS</h1>
        <br/>
        <p>Construímos sites e sistemas responsivos para que você também tenha uma ótima experiência acessando suas páginas por tablets e smartphones.</p>
      </TextContent>
      <img src={responsiveLogo} alt='responsive services' width={400} height={400} />
    </Container>
  );
};