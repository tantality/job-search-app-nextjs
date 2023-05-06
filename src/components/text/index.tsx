import { MantineSize } from '@mantine/core';
import { FontWeight } from 'next/dist/compiled/@vercel/og/satori';
import { FC, ReactNode } from 'react';
import { StyledText } from './styled';

export interface TextProps {
  weight?: FontWeight;
  size?: MantineSize;
  lineHeight?: string;
  children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
  return <StyledText {...props} />;
};
