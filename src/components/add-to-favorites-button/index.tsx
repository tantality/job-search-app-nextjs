import { FC, useState, MouseEvent } from 'react';
import StarIcon from '../../../public/assets/icons/star.svg';
import { StyledAddToFavoritesButton } from './styled';

export const AddToFavoritesButton: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsActive((prev) => !prev);
  };

  return (
    <StyledAddToFavoritesButton $isActive={isActive} onClick={handleClick}>
      <StarIcon />
    </StyledAddToFavoritesButton>
  );
};
