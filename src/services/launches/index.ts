import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILaunch } from '../../types/launches';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v5' }),
  endpoints: (builder) => ({
    getLaunches: builder.query<ILaunch[], []>({
      transformResponse: (launches: ILaunch[]) => {
        const filterDate = launches.filter((launch) => {
          const dateYear = new Date(launch.date_utc).getFullYear();
          return dateYear >= 2015 && dateYear <= 2019;
        });
        return filterDate.sort((a, b) => {
          const keyA = new Date(a.date_utc).getTime();
          const keyB = new Date(b.date_utc).getTime();
          if (keyA < keyB) {
            return 1;
          }
          if (keyA > keyB) {
            return -1;
          }
          return 0;
        });
      },
      query: () => ({
        url: `/launches`,
      }),
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;
