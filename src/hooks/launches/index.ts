import { launchesApi } from '../../services/launches';
import { SortDirection } from '../../types';

export const useFilterLaunches = (sort: SortDirection) => {
  const { data: launches } = launchesApi.useGetLaunchesQuery([]);

  return launches
    ? [...launches].sort((a, b) => {
        const direction = sort === 'desc' ? 1 : -1;
        const keyA = a.date_utc;
        const keyB = b.date_utc;
        if (keyA < keyB) {
          return 1 * direction;
        }
        if (keyA > keyB) {
          return -1 * direction;
        }
        return 0;
      })
    : [];
};
