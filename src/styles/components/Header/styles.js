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

  @media (max-width: 585px) {
    display: none;
  }
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

  & img {
    &:hover {
      transform: scale(1.1);
      transition: ease-in-out 0.3s;
    }
  }
`;

export const MenuSideBarImg = styled.img`
  display: none;

  @media (max-width: 585px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MenuContainer = styled.div`
  display: none;

@media (max-width: 585px) {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const Modal = styled.div`
    position: fixed;
    top: 190px;
    left: 65%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 107px;
    background-color: white;
    border-radius: 5px;
    display: ${props => props.isOpen ? 'block' : 'none'};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Link = styled.a`
    cursor: pointer;
    display: block;
    padding: 8px;
    text-align: center;
    text-decoration: none;
    color: #11111f;
    &:hover {
        background-color: #f5f5f5;
    }
`;