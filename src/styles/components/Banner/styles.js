import styled from "styled-components";
import bannerImg from '../../../assets/imgs/bannerImg.jpeg';

export const BackgroundImageDiv = styled.div`
  position: fixed;
  top: 10rem;
  left: 0;
  width: 100%;
  height: 450px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  display: flex;
`;

export const DivText = styled.div`
  position: absolute; // Faz com que o texto seja posicionado em relação ao div da imagem
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // Centraliza o texto
  color: white; // Cor do texto
  text-align: center;
  width: 80%; // Largura do texto
  z-index: 2; // Para garantir que o texto sempre apareça por cima da imagem
  font-size: larger;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const Logo = styled.img`
  margin: 0 auto;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3; // Para garantir que este conteúdo sobreponha a imagem quando a página for rolada
  margin-top: 410px; // Ajuste conforme a altura da imagem + 10px para não ficar colado
  background-color: white;
  padding: 1rem;
  text-align: justify;
`;
