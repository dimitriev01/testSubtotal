import { useState } from 'react';
import Launch from '../Launch';
import style from './style.module.scss';
import Select, { SingleValue } from 'react-select';
import { launchesApi } from '../../services/launches';
import { ISelectOption, SortDirection, variantsSort } from '../../types';
import { useFilterLaunches } from '../../hooks/launches';
import SelectFilterLaunches from '../SelectFilterLaunches';

const ListLaunches = () => {
  const { isLoading, error } = launchesApi.useGetLaunchesQuery([]);
  const [sortOption, setSortOption] = useState<SingleValue<ISelectOption>>(variantsSort[1]);
  const filtredLaunches = useFilterLaunches((sortOption && sortOption.value) as SortDirection);

  if (error)
    return (
      <div data-testid="error" className={style.message}>
        Error
      </div>
    );

  if (isLoading) return <div className={style.message}>Loading launches...</div>;

  if (!filtredLaunches.length) return <div className={style.message}>No launches</div>;

  return (
    <>
      <div className={style.message}>Launches SpaceX 2015-2019</div>
      <SelectFilterLaunches sortOption={sortOption} setSortOption={setSortOption} />
      <div className={style.launches}>
        {filtredLaunches.map((launch) => (
          <Launch key={launch.name} launch={launch} />
        ))}
      </div>
    </>
  );
};

export default ListLaunches;
