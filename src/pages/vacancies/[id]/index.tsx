import { useRouter } from 'next/router';

export default function VacancyPage() {
  const { query } = useRouter();

  return <p>{query['id']}</p>;
}
