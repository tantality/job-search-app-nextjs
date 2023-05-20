import { FontWeight } from 'next/dist/compiled/@vercel/og/satori';
import { FC, ReactNode } from 'react';
import { SIZE } from '@/constants';
import { StyledText } from './styled';

export interface TextProps {
  weight?: FontWeight;
  size?: SIZE | string;
  align?: string;
  lineHeight?: string;
  children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
  return <StyledText {...props} />;
};
