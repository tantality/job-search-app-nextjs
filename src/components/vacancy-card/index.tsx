import { Dispatch, FC, MouseEvent, useContext, useState } from 'react';
import { HEADING_ORDER, SIZE } from '@/constants';
import { Vacancy } from '@/types/super-job/vacancies';
import { deleteVacancyFromFavoritesAction, addVacancyToFavoritesAction } from '@/contexts/favorite-vacancies/actions';
import { FavoriteVacanciesContext, FavoriteVacanciesDispatchContext } from '@/contexts/favorite-vacancies/context';
import { FavoriteVacanciesState, FavoriteVacancyAction } from '@/contexts/favorite-vacancies/types';
import { FavoriteButton } from '../favorite-button';
import { Splitter } from '../splitter';
import { Heading, HeadingProps } from '../heading';
import { Text } from '../text';
import {
  StyledContainer,
  StyledContent,
  StyledVacancyCard,
  StyledLocation,
  StyledDescription,
  StyledLocationIcon,
  StyledLink,
} from './styled';
import { formSalaryOutput } from './utils/form-salary-output';

export interface VacancyCardProps {
  size?: CardSize;
  headingProperties?: Omit<HeadingProps, 'children'>;
  vacancy: Vacancy;
  isHeadingLink?: boolean;
}

export type CardSize = SIZE.MD | SIZE.LG;

export const VacancyCard: FC<VacancyCardProps> = ({ size, headingProperties, vacancy, isHeadingLink }) => {
  const { ids } = useContext(FavoriteVacanciesContext) as FavoriteVacanciesState;
  const dispatch = useContext(FavoriteVacanciesDispatchContext) as Dispatch<FavoriteVacancyAction>;
  const [isFavoriteButtonActive, setIsFavoriteButtonActive] = useState<boolean>(ids.includes(vacancy.id));

  const isCardSizeEqualMD = size === SIZE.MD;

  const headingOrder = isCardSizeEqualMD ? HEADING_ORDER.H2 : HEADING_ORDER.H1;
  const headingProps = { order: headingOrder, ...headingProperties };
  const heading = isHeadingLink ? (
    <StyledLink href={`/vacancies/${vacancy.id}`}>
      <Heading {...headingProps}>{vacancy.profession}</Heading>
    </StyledLink>
  ) : (
    <Heading {...headingProps}>{vacancy.profession}</Heading>
  );

  const descriptionTextSize = isCardSizeEqualMD ? SIZE.MD : SIZE.LG;
  const locationTextLineHeight = isCardSizeEqualMD ? '19px' : '22px';

  const handleFavoriteButtonClick = (e: MouseEvent<HTMLButtonElement>, vacancyId: number): void => {
    e.stopPropagation();

    if (isFavoriteButtonActive) {
      dispatch(deleteVacancyFromFavoritesAction(vacancyId));
    } else {
      dispatch(addVacancyToFavoritesAction(vacancyId));
    }

    setIsFavoriteButtonActive((prev) => !prev);
  };

  return (
    <StyledVacancyCard data-elem={`vacancy-${vacancy.id}`}>
      <StyledContainer>
        <StyledContent cardSize={size}>
          {heading}
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
        <FavoriteButton
          isActive={isFavoriteButtonActive}
          onClick={(e: MouseEvent<HTMLButtonElement>): void => handleFavoriteButtonClick(e, vacancy.id)}
          data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        />
      </StyledContainer>
    </StyledVacancyCard>
  );
};
