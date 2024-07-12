import React, { FC, useId } from 'react';
import cx from 'classnames';
import styles from './categoryRadio.module.css';
import { Category } from '@/enums/category';

interface Props {
  name: string;
  value: Category;
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}
const CategoryRadio: FC<Props> = ({ name, value, category, setCategory }) => {
  const id = useId();

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        checked={value === category}
        value={value}
        onChange={() => setCategory(value)}
        type="radio"
        name={name}
        id={id}
      />

      <label className={styles.label} htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default CategoryRadio;
