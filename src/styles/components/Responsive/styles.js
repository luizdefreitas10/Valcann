import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  background: #ffffff;
  box-shadow:  5px 5px 1px #11111f,
             -5px -5px 1px #ffffff;
  height: 35rem;

  & img {
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  @media (max-width: 600px) {
    margin-bottom: 7rem;
  }
`;

export const TextContent = styled.div`

  & h1 {
    text-align: center;
    font-size: large;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: aliceblue; */
  width: 100%;
  text-align: center;
`;
