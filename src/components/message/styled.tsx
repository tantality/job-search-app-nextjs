import Image from 'next/image';
import styled from 'styled-components';

export const StyledVacanciesEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: max-content;
`;
