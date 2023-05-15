import { FC, ReactNode } from 'react';
import { Container } from '../container';
import { StyledContainer } from './styled';

interface MessageScreenProps {
  children: ReactNode;
}

export const MessageScreen: FC<MessageScreenProps> = ({ children }) => {
  return (
    <Container maxWidth={773}>
      <main>
        <StyledContainer>{children}</StyledContainer>
      </main>
    </Container>
  );
};
