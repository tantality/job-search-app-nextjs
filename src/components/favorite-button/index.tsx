import { FC, MouseEvent } from 'react';
import StarIcon from '../../../public/assets/icons/star.svg';
import { StyledFavoriteButton } from './styled';

interface FavoriteButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ isActive, ...props }) => {
  return (
    <StyledFavoriteButton $isActive={isActive} size={24} {...props}>
      <StarIcon />
    </StyledFavoriteButton>
  );
};
