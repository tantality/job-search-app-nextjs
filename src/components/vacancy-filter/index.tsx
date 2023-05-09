/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from 'react';
import { HEADING_ORDER, SIZE } from '@/constants';
import { NamedFormGroup } from '../named-form-group';
import { Dropdown, DropdownItem } from '../dropdown';
import { NumberInput } from '../number-input';
import { Button } from '../button';
import { Heading } from '../heading';
import { StyledContent, StyledVacancyFilter, StyledWrapper } from './styled';

export const VacancyFilter: FC = () => {
  const data: DropdownItem[] = [
    { value: '1', label: 'IT, интернет, связь, телеком' },
    { value: '2', label: 'Кадры, управление персоналом' },
    { value: '3', label: 'Искусство, культура, развлечения' },
    { value: '4', label: 'IT' },
    { value: '11', label: 'Кадры!!!' },
  ];

  return (
    <StyledVacancyFilter>
      <StyledWrapper>
        <Heading order={HEADING_ORDER.H2}>Фильтры</Heading>
        <Button size={SIZE.SM}>Сбросить</Button>
      </StyledWrapper>
      <StyledContent>
        <NamedFormGroup groupName="Отрасль">
          <Dropdown data={data} placeholder={'Выберете отрасль '} onChange={() => { }} />
        </NamedFormGroup>
        <NamedFormGroup groupName="Оклад">
          <NumberInput placeholder="От" />
          <NumberInput placeholder="До" />
        </NamedFormGroup>
        <Button>Применить</Button>
      </StyledContent>
    </StyledVacancyFilter>
  );
};
