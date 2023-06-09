import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import { HEADING_ORDER, VACANCY_FILTER_INITIAL_DATA as INITIAL_DATA } from '@/constants';
import { useIndustries } from '@/hooks/useIndustries';
import { VacancyFilterType } from '@/types';
import { NamedFormGroup } from '../named-form-group';
import { Dropdown } from '../dropdown';
import { NumberInput } from '../number-input';
import { Button } from '../button';
import { ResetButton } from '../reset-button';
import { StyledContent, StyledHeading, StyledVacancyFilter, StyledWrapper } from './styled';
import { transformIndustriesToDropdownItems } from './utils';

interface VacancyFilterProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  localVacancyFilter: VacancyFilterType;
  setLocalVacancyFilter: Dispatch<SetStateAction<VacancyFilterType>>;
  setVacancyFilterToFetch: Dispatch<SetStateAction<VacancyFilterType>>;
}

export const VacancyFilter: FC<VacancyFilterProps> = (props) => {
  const { setCurrentPage, setLocalVacancyFilter, localVacancyFilter, setVacancyFilterToFetch } = props;
  const { data: industries } = useIndustries();

  const handleResetButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setCurrentPage(1);
    setLocalVacancyFilter(({ keyword }) => ({ ...INITIAL_DATA, keyword }));
    setVacancyFilterToFetch({ ...INITIAL_DATA, keyword: localVacancyFilter.keyword });
  };

  const handleSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setCurrentPage(1);
    setVacancyFilterToFetch(localVacancyFilter);
  };

  const handleDropdownChange = (value: string): void => {
    setLocalVacancyFilter((prev) => ({ ...prev, industryId: Number(value) }));
  };

  const handlePaymentFromInput = (value: number | ''): void => {
    setLocalVacancyFilter((prev) => ({ ...prev, paymentFrom: value }));
  };

  const handlePaymentToInput = (value: number | ''): void => {
    setLocalVacancyFilter((prev) => ({ ...prev, paymentTo: value }));
  };

  return (
    <StyledVacancyFilter>
      <StyledWrapper>
        <StyledHeading order={HEADING_ORDER.H2}>Фильтры</StyledHeading>
        <ResetButton onClick={handleResetButtonClick}>Сбросить все</ResetButton>
      </StyledWrapper>
      <StyledContent>
        <NamedFormGroup groupName="Отрасль">
          <Dropdown
            data={transformIndustriesToDropdownItems(industries)}
            placeholder="Выберите отрасль"
            value={String(localVacancyFilter.industryId)}
            onChange={handleDropdownChange}
            data-elem="industry-select"
          />
        </NamedFormGroup>
        <NamedFormGroup groupName="Оклад">
          <NumberInput
            placeholder="От"
            value={localVacancyFilter.paymentFrom}
            onChange={handlePaymentFromInput}
            data-elem="salary-from-input"
          />
          <NumberInput placeholder="До" value={localVacancyFilter.paymentTo} onChange={handlePaymentToInput} data-elem="salary-to-input" />
        </NamedFormGroup>
        <Button onClick={handleSubmitButtonClick} data-elem="search-button">
          Применить
        </Button>
      </StyledContent>
    </StyledVacancyFilter>
  );
};
