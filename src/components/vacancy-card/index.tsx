import { FC } from 'react';
import { HEADING_ORDER, SIZE } from '@/constants';
import { AddToFavoritesButton } from '../add-to-favorites-button';
import { Splitter } from '../splitter';
import { Heading, HeadingProps } from '../heading';
import { Text } from '../text';
import { StyledContainer, StyledContent, StyledVacancyCard, StyledLocation, StyledDescription, StyledLocationIcon } from './styled';

export interface VacancyCardProps {
  size?: CardSize;
  headingProperties?: Omit<HeadingProps, 'children'>;
}

export type CardSize = SIZE.MD | SIZE.LG;

export const VacancyCard: FC<VacancyCardProps> = ({ size, headingProperties }) => {
  const isCardSizeEqualMD = size === SIZE.MD;

  const headingOrder = isCardSizeEqualMD ? HEADING_ORDER.H2 : HEADING_ORDER.H1;
  const headingProps = { order: headingOrder, ...headingProperties };

  const descriptionTextSize = isCardSizeEqualMD ? SIZE.SM : SIZE.LG;
  const locationTextLineHeight = isCardSizeEqualMD ? '19px' : '22px';

  return (
    <StyledVacancyCard>
      <StyledContainer>
        <StyledContent cardSize={size}>
          <Heading {...headingProps}>Менеджер-дизайнер</Heading>
          <StyledDescription>
            <Text weight={600} size={descriptionTextSize}>
              з/п от 80000 rub
            </Text>
            <Splitter />
            <Text weight={400} size={descriptionTextSize}>
              Полный рабочий день
            </Text>
          </StyledDescription>
          <StyledLocation>
            <StyledLocationIcon />
            <Text size={SIZE.MD} lineHeight={locationTextLineHeight}>
              Москва
            </Text>
          </StyledLocation>
        </StyledContent>
        <AddToFavoritesButton />
      </StyledContainer>
    </StyledVacancyCard>
  );
};
