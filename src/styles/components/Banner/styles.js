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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  width: 80%;
  z-index: 2;
  font-size: larger;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const Logo = styled.img`
  margin: 0 auto;
`;

