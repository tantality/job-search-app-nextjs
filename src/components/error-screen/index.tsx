import { FC } from 'react';
import { Message } from '../message';
import { MessageScreen } from '../message-screen';

interface ErrorScreenProps {
  messageText?: string;
}

export const ErrorScreen: FC<ErrorScreenProps> = ({ messageText }) => {
  return (
    <MessageScreen>
      <Message text={messageText ?? 'Упс, что-то пошло не так. Попробуйте позже'} />
    </MessageScreen>
  );
};
