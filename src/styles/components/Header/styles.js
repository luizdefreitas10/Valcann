import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #11111f;
  width: 100%;
  height: 10rem;
  position: ${(props) => props.isFixed ? 'fixed' : 'sticky'};
  /* position: fixed; */
  top: ${props => (props.isFixed ? '-10rem' : '0')};
  z-index: 5;

  & img {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  font-size: 1rem;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20rem;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: white;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%; // ao passar o mouse, a largura será de 100%, criando o efeito da barra embaixo
  }
`;

export const CartLengthText = styled.p`
  position: absolute;
  top: 50px;
  right: -10px;
  background-color: white;
  color: #11111f;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  z-index: 1;
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;