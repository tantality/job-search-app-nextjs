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
  setPage: Dispatch<SetStateAction<number>>;
  localVacancyFilter: VacancyFilterType;
  setLocalVacancyFilter: Dispatch<SetStateAction<VacancyFilterType>>;
  setVacancyFilterToFetch: Dispatch<SetStateAction<VacancyFilterType>>;
}

export const VacancyFilter: FC<VacancyFilterProps> = ({ setPage, setLocalVacancyFilter, localVacancyFilter, setVacancyFilterToFetch }) => {
  const { data: industries } = useIndustries();

  const handleResetButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setPage(1);
    setVacancyFilterToFetch((prev) => ({ ...INITIAL_DATA, keyword: prev.keyword }));
    setLocalVacancyFilter((prev) => ({ ...INITIAL_DATA, keyword: prev.keyword }));
  };

  const handleSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setPage(1);
    setVacancyFilterToFetch(localVacancyFilter);
  };

  const handleDropdownChange = (value: string): void => {
    setLocalVacancyFilter((prev) => ({ ...prev, industryId: Number(value) }));
  };

  const handlePaymentFromInput = (value: number | ''): void => {
    setLocalVacancyFilter((prev) => ({ ...prev, paymentFrom: Number(value) }));
  };

  const handlePaymentToInput = (value: number | ''): void => {
    setLocalVacancyFilter((prev) => ({ ...prev, paymentTo: Number(value) }));
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
          />
        </NamedFormGroup>
        <NamedFormGroup groupName="Оклад">
          <NumberInput placeholder="От" value={localVacancyFilter.paymentFrom} onChange={handlePaymentFromInput} />
          <NumberInput placeholder="До" value={localVacancyFilter.paymentTo} onChange={handlePaymentToInput} />
        </NamedFormGroup>
        <Button onClick={handleSubmitButtonClick}>Применить</Button>
      </StyledContent>
    </StyledVacancyFilter>
  );
};
