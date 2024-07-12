import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import cx from 'classnames';
import styles from './filters.module.css';
import Button from '@/components/shared/button/button';

import SuggestionIcon from '@/icons/icon-suggestions';
import Dropdown from '@/components/shared/dropdown/dropdown';
import { DropdownOption } from '@/types/dropdownOption';

const Filters: FC<{
  sortOptions: DropdownOption[];
  sortBy: DropdownOption;
  setSortBy: Dispatch<SetStateAction<DropdownOption>>;
}> = ({ sortOptions, sortBy, setSortBy }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.suggestionsCount}>
        <SuggestionIcon />
        <h2>{6} Suggestions</h2>
      </div>
      <div className={styles.sortDropdown}>
        <Dropdown
          label={'Sort by: '}
          state={sortBy}
          setState={setSortBy}
          options={sortOptions}
        />
      </div>
      <Button
        predefinedStyle="fill"
        className={styles.addButton}
        onClick={() => {}}
      >
        + Add Feedback
      </Button>
    </nav>
  );
};

export default Filters;
