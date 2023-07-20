import { renderHook, waitFor } from '@testing-library/react';
import { useGetLaunchesQuery } from './services/launches';

test('useGetLaunchesQuery hook returns expected data', async () => {
  const { result } = renderHook(() => useGetLaunchesQuery([]));

  await waitFor(() => result.current.data);

  expect(
    result.current.data
      ?.sort((a, b) => {
        const keyA = new Date(a.date_utc).getTime();
        const keyB = new Date(b.date_utc).getTime();
        if (keyA < keyB) {
          return 1;
        }
        if (keyA > keyB) {
          return -1;
        }
        return 0;
      })
      .slice(2)
  ).toEqual([
    {
      name: 'FalconSat',
      date_utc: '2006-03-24T22:30:00.000Z',
      details: 'Engine failure at 33 seconds and loss of vehicle',
      links: {
        patch: {
          small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
        },
      },
    },
    {
      name: 'DemoSat',
      date_utc: '2007-03-21T01:10:00.000Z',
      details:
        'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
      links: {
        patch: {
          small: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
        },
      },
    },
  ]);
});
