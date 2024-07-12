import React, { FC } from 'react';
import cx from 'classnames';
import ArrowIcon from '@/icons/icon-arrow-up';
import styles from './likeButton.module.css';

interface Props {
  value: number;
  isLiked: boolean;
  handleChange: () => void;
}

const LikeButton: FC<Props> = ({ value, isLiked, handleChange }) => {
  return (
    <div className={styles.container}>
      <button
        className={cx(styles.button, {
          [styles.button__active]: isLiked,
        })}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleChange();
        }}
      >
        <ArrowIcon />
        <span>{value}</span>
      </button>
    </div>
  );
};

export default LikeButton;
