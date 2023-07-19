import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchLauchesAsync, sortLaunches } from "../../store/slices/launches";
import Launch from "../launch/Launch";
import style from "./style.module.scss";
import Select, { SingleValue } from "react-select";
import { ISelectOption } from "types";

const ListLaunches = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.launches);
  const launches = { data };
  const variantsSort: ISelectOption[] = [
    { name: "По возрастанию", value: "asc" },
    { name: "По убыванию", value: "desc" },
  ];
  const [sortOption, setSortOption] = useState<SingleValue<ISelectOption>>(
    variantsSort[1]
  );

  const handleSortFilterChange = (option: SingleValue<ISelectOption>) => {
    if (option && sortOption && option.value !== sortOption.value) {
      console.log(option.value);
      dispatch(sortLaunches(option.value));
    }
  };

  useEffect(() => {
    dispatch(fetchLauchesAsync());
  }, []);

  if (loading) return <div className={style.message}>Loading launches...</div>;

  if (!launches.data.length)
    return <div className={style.message}>No launches</div>;

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
            handleSortFilterChange(option);
          }}
          isSearchable={false}
        />
      </div>
      <div className={style.launches}>
        {launches.data.map((launch) => (
          <Launch key={launch.name} launch={launch} />
        ))}
      </div>
    </>
  );
};

export default ListLaunches;
