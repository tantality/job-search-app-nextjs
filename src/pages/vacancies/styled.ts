import styled from 'styled-components';
import { StyledSidebar } from '@/components/sidebar/styled';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 315px) 1fr;
  column-gap: 28px;
  grid-template-areas: 'sidebar .';
  height: 100%;

  ${StyledSidebar} {
    grid-area: sidebar;
  }
`;

export const StyledMainContent = styled.main`
  display: grid;
  margin-top: 16px;
  row-gap: 40px;
  justify-items: center;
  grid-template-rows: minmax(616px, 1fr) min-content;
  align-items: center;
`;
