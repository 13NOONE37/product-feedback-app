'use client';
import React, { useContext, useEffect } from 'react';
import styles from './filters.module.css';
import Button from '@/components/shared/button/button';

import SuggestionIcon from '@/icons/icon-suggestions';
import Dropdown from '@/components/shared/dropdown/dropdown';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import SortContext, { SORT } from '@/providers/sortProvider/sortProvider';

const Filters = () => {
  const { sortBy, setSortBy } = useContext(SortContext);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const sortParam = Object.values(SORT.OPTIONS).find(
      (item) => item.value === params.get(SORT.PARAM),
    );
    if (sortParam) setSortBy(sortParam);
  }, []);
  useEffect(() => {
    router.push(`/suggestions?${SORT.PARAM}=${sortBy.value}`, {
      scroll: false,
    });
  }, [sortBy]);

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
          options={Object.values(SORT.OPTIONS)}
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
