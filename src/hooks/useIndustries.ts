import { UseQueryResult, useQuery } from '@tanstack/react-query';
import superJob from '@/services/super-job/super-job-api';
import { Industry } from '@/types/super-job/industries';

export const useIndustries = (): UseQueryResult<Industry[]> => {
  const data = useQuery({ queryKey: ['industries'], queryFn: () => superJob.getIndustries() });
  return data;
};
