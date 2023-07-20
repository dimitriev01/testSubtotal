export interface ISelectOption {
  name: string;
  value: string;
}

export type SortDirection = 'asc' | 'desc';

export const variantsSort: ISelectOption[] = [
  { name: 'По возрастанию', value: 'asc' },
  { name: 'По убыванию', value: 'desc' },
];
