import { FC, useState, MouseEvent } from 'react';
import StarIcon from '../../../public/assets/icons/star.svg';
import { StyledFavoriteButton } from './styled';

export const FavoriteButton: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsActive((prev) => !prev);
  };

  return (
    <StyledFavoriteButton $isActive={isActive} onClick={handleClick} size={24}>
      <StarIcon />
    </StyledFavoriteButton>
  );
};
