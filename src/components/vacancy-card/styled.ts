/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import Link from 'next/link';
import { SIZE } from '@/constants';
import LocationIcon from '../../../public/assets/icons/location.svg';
import { CardSize } from '.';

export const StyledVacancyCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #eaebed;
  padding: 23px;
  height: auto;
  width: 100%;

  @media (max-width: 950px) {
    padding: 20px;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 20px;

  @media (max-width: 450px) {
    button {
      align-self: center;
    }
  }
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

  @media (max-width: 950px) {
    row-gap: ${({ cardSize }) => {
      switch (cardSize) {
        case SIZE.LG:
          return '14px';
      }
    }};
  }

  @media (max-width: 700px) {
    row-gap: ${({ cardSize }) => {
      switch (cardSize) {
        case SIZE.LG:
          return '12px';
      }
    }};
  }
`;

StyledContent.defaultProps = {
  cardSize: SIZE.MD,
};

export const StyledDescription = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  row-gap: 4px;
  flex-wrap: wrap;
`;

export const StyledLocation = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const StyledLocationIcon = styled(LocationIcon)`
  max-width: 20px;
`;

export const StyledLink = styled(Link)`
  color: #5e96fc;

  &:hover {
    color: #92c1ff;
  }

  &:active {
    color: #3b7cd3;
  }
`;
