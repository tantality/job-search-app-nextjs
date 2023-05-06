import { TitleOrder } from '@mantine/core';
import { FontWeight } from 'next/dist/compiled/@vercel/og/satori';
import { FC, ReactNode } from 'react';
import { StyledHeading } from './styled';

export interface HeadingProps {
  order?: TitleOrder;
  color?: string;
  weight?: FontWeight;
  children: ReactNode;
}

export const Heading: FC<HeadingProps> = (props) => {
  return <StyledHeading {...props} />;
};
