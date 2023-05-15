import { FC, MouseEvent } from 'react';
import { SIZE } from '@/constants';
import { Text } from '../text';
import { Button } from '../button';
import { BUTTON_IMPORTANCE } from '../button/constants';
import { StyledImage, StyledVacanciesEmptyState } from './styled';

interface MessageProps {
  buttonProps?: ButtonProps;
  text: string;
}

interface ButtonProps {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Message: FC<MessageProps> = ({ buttonProps, text }) => {
  return (
    <StyledVacanciesEmptyState>
      <StyledImage src="/assets/images/search-man.svg" alt="search-man" width={240} height={230}/>
      <Text weight={700} lineHeight="29px" size="24px">
        {text}
      </Text>
      {buttonProps && (
        <Button importance={BUTTON_IMPORTANCE.SECONDARY} onClick={buttonProps.onClick} size={SIZE.MD}>
          {buttonProps.text}
        </Button>
      )}
    </StyledVacanciesEmptyState>
  );
};
