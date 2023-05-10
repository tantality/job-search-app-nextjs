import { FC } from 'react';
import { StyledPagination } from './styled';

interface PaginationProps {
  total: number;
  value: number;
  onChange: (value: number) => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
  return <StyledPagination {...props} />;
};
