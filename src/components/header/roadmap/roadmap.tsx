import React, { FC } from 'react';
import cx from 'classnames';
import styles from './roadmap.module.css';
import Link from 'next/link';

const Roadmap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Roadmap</h2>
        <Link href={'/roadmap'} className={styles['heading--link']}>
          View
        </Link>
      </div>

      <div className={styles.categories}>
        <div className={cx(styles.category, styles.category__planned)}>
          <span className={styles['category--name']}>Planned</span>
          <span className={styles['category--count']}>2</span>
        </div>
        <div className={cx(styles.category, styles.category__inProgress)}>
          <span className={styles['category--name']}>In-Progress</span>
          <span className={styles['category--count']}>3</span>
        </div>
        <div className={cx(styles.category, styles.category__live)}>
          <span className={styles['category--name']}>Live</span>
          <span className={styles['category--count']}>1</span>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
