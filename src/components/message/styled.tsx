import Image from 'next/image';
import styled from 'styled-components';

export const StyledVacanciesEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    row-gap: 27px;
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
