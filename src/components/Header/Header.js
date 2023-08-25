/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect, useContext } from 'react';
import newTechSales from '../../assets/imgs/newtechsalesnobg.png'
import { Container, Nav, StyledLink, CartLengthText, CartContainer } from '../../styles/components/Header/styles';
import { useNavigate } from 'react-router-dom';
import { shoppingCartContext } from '../../context/shoppingCartContext';
import shoppingCartSvg from '../../assets/svgs/shoppingCartSvg.svg';

export default function Header () {

  const [isFixed, setIsFixed] = useState(false);
  const { cartItems } = useContext(shoppingCartContext);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const isBelow = rect.bottom <= 0;

        setIsFixed(isBelow);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Container ref={headerRef} isFixed={isFixed}>
      <img src={newTechSales} alt='techsaleslogo' width={160} height={160} onClick={() => navigate('/')}/>
      <Nav>
        <StyledLink onClick={() => navigate('/')}>Home</StyledLink>
        <StyledLink>Serviços</StyledLink>
        <StyledLink>Contato</StyledLink>
      </Nav>
      <CartContainer>
        <img src={shoppingCartSvg} alt='shopping cart icon' width={30} height={30} onClick={() => navigate('/cart')}/>
        <CartLengthText>{cartItems.length}</CartLengthText>
      </CartContainer>
    </Container>
  );
};