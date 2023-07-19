import { SortDirection } from "types";

export interface ILaunchesState {
  data: ILaunch[];
  loading: boolean;
}

export interface ILaunch {
  name: string;
  date_utc: string;
  details: string;
  links: {
    patch: {
      small: string;
    };
  };
}
