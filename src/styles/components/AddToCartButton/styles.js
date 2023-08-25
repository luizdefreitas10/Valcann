import styled from 'styled-components';
import { ReactComponent as CartSVG } from '../../../assets/svgs/shoppingCartSvgBlack.svg'; // Substitua pelo caminho correto para seu arquivo SVG

export const IconContainer = styled.span`
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .5s;
`;

export const CartIcon = styled(CartSVG)`
  fill: #000;
  height: 1em;
`;

export const Text = styled.p`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(17, 17, 17);
  z-index: 1;
  transition-duration: .5s;
  font-size: 1.04em;
  font-weight: 600;
`;

export const CartBtn = styled.button`
  margin: 0 auto;
  width: 140px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: rgb(255, 208, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: .5s;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;

  &:hover ${IconContainer} {
    transform: translateX(58px);
    border-radius: 40px;
    transition-duration: .5s;
    color: #11111f;
  }

  &:hover ${Text} {
    transform: translate(10px,0px);
    transition-duration: .5s;
  }

  &:active {
    transform: scale(0.95);
    transition-duration: .5s;
  }
`;
