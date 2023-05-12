import { DropdownItem } from '@/components/dropdown';
import { Industry } from '@/types/super-job/industries';

export const transformIndustriesToDropdownItems = (industries?: Industry[]): DropdownItem[] => {
  if (!industries || !industries.length) {
    return [];
  }

  const dropdownData: DropdownItem[] = industries.map(({ key, title }) => {
    return { value: String(key), label: title };
  });

  return dropdownData;
};
