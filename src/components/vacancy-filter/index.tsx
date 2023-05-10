import { Dispatch, FC, MouseEvent, SetStateAction, useContext } from 'react';
import { HEADING_ORDER, SIZE } from '@/constants';
import { VacancyFilterContext, VacancyFilterContextType } from '@/contexts/vacancy-filter/context';
import { initialData } from '@/contexts/vacancy-filter/initial-data';
import { NamedFormGroup } from '../named-form-group';
import { Dropdown, DropdownItem } from '../dropdown';
import { NumberInput } from '../number-input';
import { Button } from '../button';
import { Heading } from '../heading';
import { StyledContent, StyledVacancyFilter, StyledWrapper } from './styled';

interface VacancyFilterProps {
  onSubmit: Dispatch<SetStateAction<number>>;
}

export const VacancyFilter: FC<VacancyFilterProps> = ({ onSubmit }) => {
  const { vacancyFilter, setVacancyFilter } = useContext(VacancyFilterContext) as VacancyFilterContextType;

  const data: DropdownItem[] = [
    { value: '1', label: 'IT, интернет, связь, телеком' },
    { value: '2', label: 'Кадры, управление персоналом' },
    { value: '3', label: 'Искусство, культура, развлечения' },
    { value: '4', label: 'IT' },
    { value: '11', label: 'Кадры!!!' },
  ];

  const handleResetButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setVacancyFilter((prev) => ({ ...initialData, keyword: prev.keyword }));
  };

  const handleSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    onSubmit(1);
  };

  const handleDropdownChange = (value: string): void => {
    setVacancyFilter((prev) => ({ ...prev, industryId: Number(value) }));
  };

  const handlePaymentFromInput = (value: number | ''): void => {
    setVacancyFilter((prev) => ({ ...prev, paymentFrom: Number(value) }));
  };

  const handlePaymentToInput = (value: number | ''): void => {
    setVacancyFilter((prev) => ({ ...prev, paymentTo: Number(value) }));
  };

  return (
    <StyledVacancyFilter>
      <StyledWrapper>
        <Heading order={HEADING_ORDER.H2}>Фильтры</Heading>
        <Button size={SIZE.SM} onClick={handleResetButtonClick}>
          Сбросить
        </Button>
      </StyledWrapper>
      <StyledContent>
        <NamedFormGroup groupName="Отрасль">
          <Dropdown
            data={data}
            placeholder={'Выберете отрасль '}
            value={String(vacancyFilter.industryId)}
            onChange={handleDropdownChange}
          />
        </NamedFormGroup>
        <NamedFormGroup groupName="Оклад">
          <NumberInput placeholder="От" value={vacancyFilter.paymentFrom} onChange={handlePaymentFromInput} />
          <NumberInput placeholder="До" value={vacancyFilter.paymentTo} onChange={handlePaymentToInput} />
        </NamedFormGroup>
        <Button onClick={handleSubmitButtonClick}>Применить</Button>
      </StyledContent>
    </StyledVacancyFilter>
  );
};
