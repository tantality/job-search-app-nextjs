import { useRouter } from 'next/router';
import { Loader } from '@mantine/core';
import { Container } from '@/components/container';
import { useVacancy } from '@/hooks/useVacancy';
import { VacancyCard } from '@/components/vacancy-card';
import { SIZE } from '@/constants';
import { VacancyDescription } from '@/components/vacancy-description';
import { StyledMainContent, StyledContainer } from '@/styles/pages/vacancies/id-styled';
import { ErrorScreen } from '@/components/error-screen';

export default function VacancyPage() {
  const { query } = useRouter();
  const vacancyIdParam = query['id'];
  const vacancyId = Number(vacancyIdParam);
  const isValidVacancyId = Boolean(vacancyId);

  const { data: vacancy, isFetching, isSuccess, isError, isLoading } = useVacancy(vacancyId, { enabled: isValidVacancyId });

  if ((vacancyIdParam && !isValidVacancyId) || isError) {
    const props = isValidVacancyId ? {} : { messageText: 'Вакансии не существует' };
    return <ErrorScreen {...props} />;
  }

  return (
    <Container maxWidth={773}>
      <StyledMainContent>
        <StyledContainer justifyContent={isLoading ? 'center' : 'start'}>
          {isSuccess && !isFetching ? (
            <>
              <VacancyCard size={SIZE.LG} vacancy={vacancy} />
              <VacancyDescription description={vacancy.vacancyRichText} />
            </>
          ) : (
            <Loader />
          )}
        </StyledContainer>
      </StyledMainContent>
    </Container>
  );
}
