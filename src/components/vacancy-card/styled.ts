import styled from 'styled-components';
import { SIZE } from '@/constants';
import LocationIcon from '../../../public/assets/icons/location.svg';
import { CardSize } from '.';

export const StyledVacancyCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #eaebed;
  padding: 23px;
  height: auto;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 20px;
`;

interface StyledContentProps {
  cardSize?: CardSize;
}

export const StyledContent = styled.div<StyledContentProps>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ cardSize }) => {
  switch (cardSize) {
  case SIZE.MD:
    return '12px';
  case SIZE.LG:
    return '16px';
  }
}};
`;

StyledContent.defaultProps = {
  cardSize: SIZE.MD,
};

export const StyledDescription = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const StyledLocation = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const StyledLocationIcon = styled(LocationIcon)`
  max-width: 20px;
`;
