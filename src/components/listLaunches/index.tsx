import { useState } from 'react';
import Launch from '../Launch';
import style from './style.module.scss';
import Select, { SingleValue } from 'react-select';
import { launchesApi } from '../../services/launches';
import { ISelectOption, SortDirection, variantsSort } from '../../types';
import { useFilterLaunches } from '../../hooks/launches';

const ListLaunches = () => {
  const [sortOption, setSortOption] = useState<SingleValue<ISelectOption>>(variantsSort[1]);
  const { isLoading, error } = launchesApi.useGetLaunchesQuery([]);
  const filtredLaunches = useFilterLaunches((sortOption && sortOption.value) as SortDirection);

  if (error) return <div className={style.message}>Error</div>;

  if (isLoading && !filtredLaunches)
    return <div className={style.message}>Loading launches...</div>;

  if (!filtredLaunches?.length) return <div className={style.message}>No launches</div>;

  return (
    <>
      <div className={style.message}>Launches SpaceX 2015-2019</div>
      <div style={{ width: 200 }}>
        <Select
          options={variantsSort}
          value={sortOption}
          getOptionLabel={(option) => option.name}
          onChange={(option) => {
            setSortOption(option);
          }}
          isSearchable={false}
        />
      </div>
      <div className={style.launches}>
        {[].map((launch) => (
          <Launch key={1} launch={launch} />
        ))}
      </div>
    </>
  );
};

export default ListLaunches;
