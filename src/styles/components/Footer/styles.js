import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #11111f;
  height: 12.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3.5rem;
  padding: 2rem;

  & p {
    color: white;
  }
`;

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem;
`;

export const LeftFooter = styled.div`

`;

export const CopyrightText = styled.p`
  text-align: center;
  padding: 0.5rem;
`;
