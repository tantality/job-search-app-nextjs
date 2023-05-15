import { Dispatch, FC, MouseEvent, SetStateAction, useContext } from 'react';
import { HEADING_ORDER } from '@/constants';
import { VacancyFilterContext, VacancyFilterContextType, VacancyFilterType } from '@/contexts/vacancy-filter/context';
import { initialData } from '@/contexts/vacancy-filter/initial-data';
import { useIndustries } from '@/hooks/useIndustries';
import { NamedFormGroup } from '../named-form-group';
import { Dropdown } from '../dropdown';
import { NumberInput } from '../number-input';
import { Button } from '../button';
import { Heading } from '../heading';
import { ResetButton } from '../reset-button';
import { StyledContent, StyledVacancyFilter, StyledWrapper } from './styled';
import { transformIndustriesToDropdownItems } from './utils';

interface VacancyFilterProps {
  setPage: Dispatch<SetStateAction<number>>;
  localVacancyFilter: VacancyFilterType;
  setLocalVacancyFilter: Dispatch<SetStateAction<VacancyFilterType>>;
}

export const VacancyFilter: FC<VacancyFilterProps> = ({ setPage, setLocalVacancyFilter, localVacancyFilter }) => {
  const { setVacancyFilter } = useContext(VacancyFilterContext) as VacancyFilterContextType;

  const { data: industries } = useIndustries();

  const handleResetButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setPage(1);
    setVacancyFilter((prev) => ({ ...initialData, keyword: prev.keyword }));
    setLocalVacancyFilter((prev) => ({ ...initialData, keyword: prev.keyword }));
  };

  const handleSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setPage(1);
    setVacancyFilter(localVacancyFilter);
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
        <Heading order={HEADING_ORDER.H2}>Фильтры</Heading>
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
