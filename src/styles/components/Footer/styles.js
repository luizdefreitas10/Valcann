import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #11111f;
  height: 14.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3.5rem;
  padding: 1rem;
  gap: 0.5rem;

  & p {
    color: white;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 17.5rem;
  }

  @media (max-width: 571px) {
    height: 23.5rem;
  }

  @media (max-width: 378px) {
    height: 25rem;
  }

  @media (max-width: 300px) {
    height: 30.5rem;
  }
`;

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem;
`;

export const LeftFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const CopyrightText = styled.p`
  text-align: center;
  padding: 0.5rem;
`;


export const RigthFooterText = styled.p`
  font-size: 0.7rem;
`;