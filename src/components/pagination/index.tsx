import { useMediaQuery } from '@mantine/hooks';
import { FC } from 'react';
import { SIZE } from '@/constants';
import { StyledPagination } from './styled';

interface PaginationProps {
  total: number;
  value: number;
  onChange: (value: number) => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const moreThan500pxScreen = useMediaQuery('(min-width: 500px)');
  const size = moreThan500pxScreen ? SIZE.MD : SIZE.SM;

  return <StyledPagination {...props} size={size} />;
};
