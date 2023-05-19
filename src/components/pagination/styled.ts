import styled from '@emotion/styled';
import { Pagination } from '@mantine/core';

export const StyledPagination = styled(Pagination)`
  .mantine-Pagination-dots,
  .mantine-Pagination-control {
    color: #232134;
  }

  button:first-of-type:not([data-disabled]),
  button:last-of-type:not([data-disabled]) {
    color: #7b7c88;
  }

  .mantine-Pagination-control {
    border: 1px solid #d5d6dc;
  }

  [data-active='true'] {
    background-color: #5e96fc;
    border: 1px solid #5e96fc;
    color: #fff;
  }

  [data-disabled='true'] {
    opacity: 1;
    border: 1px solid #eaebed;
    background-color: #fff;
    color: #d5d6dc;
  }

  @media (max-width: 420px) {
    .mantine-Pagination-control {
      min-width: 30px;
      padding: 0 4px;
      height: 30px;
      font-size: 14px;
    }
  }
`;
