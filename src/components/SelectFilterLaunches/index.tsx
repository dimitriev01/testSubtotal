import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { ISelectOption, variantsSort } from '../../types';
import style from './style.module.scss';

interface SelectFilterLaunchesProps {
  sortOption: SingleValue<ISelectOption>;
  setSortOption: (sortOption: SingleValue<ISelectOption>) => void;
}

const SelectFilterLaunches: React.FC<SelectFilterLaunchesProps> = ({
  sortOption,
  setSortOption,
}) => {
  return (
    <div className={style.selectContainer}>
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
  );
};

export default SelectFilterLaunches;
