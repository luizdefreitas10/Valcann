import styled from 'styled-components';

export const FooterContainer = styled.footer`
  /* background-color: #11111f; */
  height: 14.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3.5rem;
  padding: 1rem;
  gap: 0.5rem;
  z-index: 1;
  /* box-shadow: 0 -10px 10px -10px rgba(17, 17, 31, 1); */

  & p {
    color: white;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    height: 17.5rem;
  }

  /* @media (max-width: 513px) {
    height: 23.5rem;
  } */

  @media (max-width: 378px) {
    height: 19rem;
  }

  @media (max-width: 300px) {
    /* height: 30.5rem; */
  }
`;

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem;

  &  p {
    /* color: #11111f; */
    color: grey;
  }
`;

export const LeftFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const CopyrightText = styled.p`
  text-align: center;
  padding: 0.5rem;
  color: white;
`;


export const RigthFooterText = styled.p`
  font-size: 0.7rem;
  color: #11111f;
`;