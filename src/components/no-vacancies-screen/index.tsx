import { useRouter } from 'next/router';
import { FC, MouseEvent } from 'react';
import { Message } from '../message';
import { MessageScreen } from '../message-screen';

interface NoVacanciesScreenProps {
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  messageText?: string;
}

export const NoVacanciesScreen: FC<NoVacanciesScreenProps> = ({ onButtonClick, messageText }) => {
  const { push } = useRouter();
  const handleButtonClickDefault = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    push('/vacancies');
  };

  return (
    <MessageScreen>
      <Message
        buttonProps={{ text: 'Поиск Вакансий', onClick: onButtonClick ?? handleButtonClickDefault }}
        text={messageText ?? 'Упс, здесь еще ничего нет!'}
      />
    </MessageScreen>
  );
};
