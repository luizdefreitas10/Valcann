import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  gap: 5rem;
  /* background-color: red; */
  margin: 1rem 0;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 410px;
  background-color: white;
  padding: 1rem;
  text-align: justify;
`;

export const H1 = styled.h1`
  text-align: center;
  font-weight: 300;
`;