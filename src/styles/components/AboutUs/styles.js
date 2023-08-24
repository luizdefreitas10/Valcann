import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  width: 100%;
  background-color: aliceblue;

  @media (max-width: 768px) {
  flex-direction: column;
}

`;

export const AboutUsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: auto;
  padding: 3rem;

  & button {
    justify-content: flex-start;
  }

  & h1 {
    font-weight: 300;
    text-align: left;
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const AboutUsIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  & img {
    border-radius: 3px;
    max-width: 30rem;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const AboutUsH1 = styled.h1`
  font-weight: 300;
  text-align: center;
`;