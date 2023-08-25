import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 2.5rem;

  & img {
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: ease-in-out 0.3s;
    }
  }
`;