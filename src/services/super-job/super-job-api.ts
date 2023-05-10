/* eslint-disable import/no-anonymous-default-export */
import { VacancyFilter } from '@/contexts/vacancy-filter/context';
import { Industry } from '@/types/super-job/industries';
import { VacancyList } from '@/types/super-job/vacancies';
import { axiosInstance } from './axios';

class SuperJobApi {
  async getVacanciesByFilter(page: number, itemsCount: number, filter: VacancyFilter): Promise<VacancyList> {
    const { paymentFrom, paymentTo, keyword, industryId } = filter;

    const res = await axiosInstance.get<VacancyList>('/vacancies/', {
      params: {
        count: itemsCount,
        page,
        payment_to: paymentTo,
        payment_from: paymentFrom,
        keyword,
        industryId,
      },
    });

    return res.data;
  }

  async getIndustries(): Promise<Industry[]> {
    const res = await axiosInstance.get<Industry[]>('/catalogues/');
    return res.data;
  }
}

export default new SuperJobApi();
