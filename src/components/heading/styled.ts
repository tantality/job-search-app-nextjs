import styled from '@emotion/styled';
import { Title } from '@mantine/core';
import { Inter } from 'next/font/google';
import { HEADING_ORDER } from '@/constants';
import { HeadingProps } from '.';

const inter = Inter({ subsets: ['latin'] });

export const StyledHeading = styled(Title)<Pick<HeadingProps, 'order'>>`
  font-family: ${inter.style.fontFamily};
  font-style: ${inter.style.fontStyle};

  ${({ order }) => {
  switch (order) {
  case HEADING_ORDER.H1:
    return 'font-size:28px; line-height: 34px';
  case HEADING_ORDER.H2:
    return 'font-size:20px; line-height: 24px';
  }
}}
`;
