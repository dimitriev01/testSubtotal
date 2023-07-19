export interface IErrorResponse {
  error: string | number;
  error_message: string;
}

export interface ISelectOption {
  name: string;
  value: string;
}

export type SortDirection = "asc" | "desc";
