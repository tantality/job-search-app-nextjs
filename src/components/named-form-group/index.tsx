import { FC, ReactNode } from 'react';
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
        <Text weight={700}>{groupName}</Text>
      </legend>
      {children}
    </StyledNamedFormGroup>
  );
};
