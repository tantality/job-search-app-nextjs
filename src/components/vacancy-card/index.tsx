import { FC } from 'react';
import { HEADING_ORDER, SIZE } from '@/constants';
import { Vacancy } from '@/types/super-job/vacancies';
import { FavoriteButton } from '../favorite-button';
import { Splitter } from '../splitter';
import { Heading, HeadingProps } from '../heading';
import { Text } from '../text';
import { StyledContainer, StyledContent, StyledVacancyCard, StyledLocation, StyledDescription, StyledLocationIcon } from './styled';
import { formSalaryOutput } from './utils/form-salary-output';

export interface VacancyCardProps {
  size?: CardSize;
  headingProperties?: Omit<HeadingProps, 'children'>;
  vacancy: Vacancy;
}

export type CardSize = SIZE.MD | SIZE.LG;

export const VacancyCard: FC<VacancyCardProps> = ({ size, headingProperties, vacancy }) => {
  const isCardSizeEqualMD = size === SIZE.MD;

  const headingOrder = isCardSizeEqualMD ? HEADING_ORDER.H2 : HEADING_ORDER.H1;
  const headingProps = { order: headingOrder, ...headingProperties };

  const descriptionTextSize = isCardSizeEqualMD ? SIZE.SM : SIZE.LG;
  const locationTextLineHeight = isCardSizeEqualMD ? '19px' : '22px';

  return (
    <StyledVacancyCard>
      <StyledContainer>
        <StyledContent cardSize={size}>
          <Heading {...headingProps}>{vacancy.profession}</Heading>
          <StyledDescription>
            <Text weight={600} size={descriptionTextSize}>
              {formSalaryOutput(vacancy.payment_from, vacancy.payment_to, vacancy.currency)}
            </Text>
            <Splitter />
            <Text weight={400} size={descriptionTextSize}>
              {vacancy.type_of_work.title}
            </Text>
          </StyledDescription>
          <StyledLocation>
            <StyledLocationIcon />
            <Text size={SIZE.MD} lineHeight={locationTextLineHeight}>
              {vacancy.town.title}
            </Text>
          </StyledLocation>
        </StyledContent>
        <FavoriteButton />
      </StyledContainer>
    </StyledVacancyCard>
  );
};
