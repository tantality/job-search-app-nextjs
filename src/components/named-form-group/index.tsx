import { FC, ReactNode } from 'react';
import { SIZE } from '@/constants';
import { Text } from '../text';
import { StyledNamedFormGroup } from './styled';

interface NamedFormGroupProps {
  children: ReactNode;
  groupName: string;
}

export const NamedFormGroup: FC<NamedFormGroupProps> = ({ children, groupName }) => {
  return (
    <StyledNamedFormGroup>
      <legend>
        <Text weight={700} size={SIZE.MD}>
          {groupName}
        </Text>
      </legend>
      {children}
    </StyledNamedFormGroup>
  );
};
