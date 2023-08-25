import styled from 'styled-components'

export const ServiceDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: aliceblue;
  padding: 3rem;
  border-radius: 5px;

  @media (max-width: 850px) {
    flex-direction: column;
  }

`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 60%;
  min-width: 300px;
  padding: 1rem;
  border-radius: 5px;

  & h1 {
    text-align: center;
    font-weight: 300;
  }


  & p {
    text-align: justify;
  }

  @media (max-width: 850px) {
    /* width: 80%; */
  }
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
`;

export const ServiceDetailWrappper = styled.div`

  & svg {
    margin-left: 15%;
    cursor: pointer;
    height: 50px;
    width: 50px;
  }
`;