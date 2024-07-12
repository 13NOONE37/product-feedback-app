import React, { FC } from 'react';
import cx from 'classnames';
import styles from './hamburger.module.css';
const Hamburger: FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      className={cx(styles.hamburger, {
        [styles.opened]: active,
      })}
    >
      <div className={styles.hamburger__top}></div>
      <div className={styles.hamburger__middle}></div>
      <div className={styles.hamburger__bottom}></div>
    </div>
  );
};

export default Hamburger;
