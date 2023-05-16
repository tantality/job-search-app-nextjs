import { FC } from 'react';
import { StyledTypography } from '@/styles/typography';
import { StyledDescription } from './styled';

interface VacancyDescriptionProps {
  description: string;
}

export const VacancyDescription: FC<VacancyDescriptionProps> = ({ description }) => {
  return (
    <StyledDescription>
      <StyledTypography>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </StyledTypography>
    </StyledDescription>
  );
};
