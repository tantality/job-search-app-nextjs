import styled from 'styled-components';
import { StyledHeading as StyledMainHeading } from '../heading/styled';

export const StyledVacancyFilter = styled.form`
  display: grid;
  row-gap: 32px;

  @media (max-width: 950px) {
    row-gap: 28px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  align-items: center;
`;

export const StyledHeading = styled(StyledMainHeading)`
  line-height: 20px;
`;
