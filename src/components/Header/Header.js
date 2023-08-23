/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react';
import newTechSales from '../../assets/imgs/newtechsalesnobg.png'
import { Container, Nav, StyledLink } from '../../styles/components/Header/styles'; 

export default function Header () {

  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);

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
      <img src={newTechSales} alt='techsaleslogo' width={160} height={160} />
      <Nav>
        <StyledLink>Home</StyledLink>
        <StyledLink>Serviços</StyledLink>
        <StyledLink>Contato</StyledLink>
      </Nav>
    </Container>
  );
};