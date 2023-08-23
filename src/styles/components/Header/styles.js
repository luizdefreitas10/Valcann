import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #11111f;
  width: 100%;
  height: 10rem;
  position: ${(props) => props.isFixed ? 'fixed' : 'sticky'};
  top: ${props => (props.isFixed ? '-10rem' : '0')};
  z-index: 5;
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

