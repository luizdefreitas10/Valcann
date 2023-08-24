import {
  BackgroundImageDiv,
  DivText,
  Logo
} from "../../styles/components/Banner/styles";

import newTechSalesLogo from '../../assets/imgs/newtechsalesnobg.png';

export default function Banner() {
  return (
    <>
      <BackgroundImageDiv>
        <Logo src={newTechSalesLogo} alt='tech sales logo' width={200} height={200} />
        <DivText>
          Transformamos a sua ideia em realidade. Desenvolvemos sistemas adaptáveis ao seu modelo de gestão, com
          tecnologia de ponta e soluções inovadoras.
        </DivText>
      </BackgroundImageDiv>
    </>
  );
}
