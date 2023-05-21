import Image from 'next/image';
import styled from 'styled-components';

export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
  max-width: 500px;

  button {
    min-width: 164px;
  }

  @media (max-width: 900px) {
    row-gap: 27px;
  }

  @media (max-width: 800px) {
    max-width: 400px;
  }

  @media (max-width: 450px) {
    max-width: 300px;
  }
`;

export const StyledImage = styled(Image)`
  width: max-content;

  @media (max-width: 700px) {
    width: 220px;
    height: 210px;
  }

  @media (max-width: 450px) {
    width: 190px;
    height: 180px;
  }
`;
