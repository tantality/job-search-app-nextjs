import { FC, MouseEvent } from 'react';
import StarIcon from '../../../public/assets/icons/star.svg';
import { StyledFavoriteButton } from './styled';

interface FavoriteButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}
export const FavoriteButton: FC<FavoriteButtonProps> = ({ onClick, isActive }) => {
  return (
    <StyledFavoriteButton $isActive={isActive} onClick={onClick} size={24}>
      <StarIcon />
    </StyledFavoriteButton>
  );
};
