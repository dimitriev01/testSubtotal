import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILaunch, ILaunchesState } from './types';
import api from '../../../services';
import { AxiosError } from 'axios';
import { IErrorResponse } from '../../../types/index';

export const fetchLauchesAsync = createAsyncThunk(
  'launches/fetchLaunches',
  async function (_, { rejectWithValue }) {
    try {
      const response = await api.launches.getLaunches();
      const filterDate = response.data.filter((launch: ILaunch) => {
        const dateYear = new Date(launch.date_utc).getFullYear();
        return dateYear >= 2015 && dateYear <= 2019;
      });
      const sortedByAsc = filterDate.sort((a: ILaunch, b: ILaunch) => {
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
      return sortedByAsc;
    } catch (err: any) {
      let error: AxiosError<IErrorResponse> = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data.error_message);
    }
  }
);

const initialState: ILaunchesState = {
  data: [],
  loading: false,
};

const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    sortLaunches: (state, action: PayloadAction<string>) => {
      state.data = state.data.sort((a, b) => {
        const direction = action.payload === 'desc' ? 1 : -1;
        const keyA = a.date_utc;
        const keyB = b.date_utc;
        if (keyA < keyB) {
          return 1 * direction;
        }
        if (keyA > keyB) {
          return -1 * direction;
        }
        return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLauchesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLauchesAsync.fulfilled, (state, action: PayloadAction<ILaunch[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchLauchesAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { sortLaunches } = launchesSlice.actions;

export default launchesSlice.reducer;
