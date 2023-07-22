import { renderHook, waitFor } from '@testing-library/react';
import { useGetLaunchesQuery } from './services/launches';
import { Wrapper } from './utils/test.utils';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('useGetLaunchesQuery', () => {
  const endpointName = 'getLaunches';
  const data = {};

  beforeEach(() => {
    fetchMock.mockOnceIf('https://api.spacexdata.com/v5/launches', () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      })
    );
  });

  it('renders RTK hook', async () => {
    const { result } = renderHook(() => useGetLaunchesQuery([]), {
      wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName,
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toBeCalledTimes(1);

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName,
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false,
    });
  });
});
