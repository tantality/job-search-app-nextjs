import { useRouter } from 'next/router';
import { Loader } from '@mantine/core';
import { Container } from '@/components/container';
import { useVacancy } from '@/hooks/useVacancy';
import { VacancyCard } from '@/components/vacancy-card';
import { SIZE } from '@/constants';
import { VacancyDescription } from '@/components/vacancy-description';
import { StyledMainContent, StyledContainer } from '@/styles/pages/vacancies/id-styled';

export default function VacancyPage() {
  const { query } = useRouter();
  const vacancyId = Number(query['id']);
  const isValidVacancyId = Boolean(Number(vacancyId));

  const { data: vacancy, isFetching, isSuccess } = useVacancy(vacancyId, { enabled: isValidVacancyId });

  return (
    <Container maxWidth={773}>
      <StyledMainContent>
        <StyledContainer>
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
