import React, { FC, useContext } from 'react';
import styles from './categories.module.css';
import { Category } from '@/enums/category';
import CategoryRadio from './categoryRadio/categoryRadio';
import CategoryContext from '@/providers/categoryProvider/categoryProvider';

const Categories = () => {
  const { category, setCategory } = useContext(CategoryContext);

  return (
    <div className={styles.container}>
      {Object.values(Category).map((value) => (
        <CategoryRadio
          name={'categoryRadio'}
          value={value}
          category={category}
          setCategory={setCategory}
          key={value}
        />
      ))}
    </div>
  );
};

export default Categories;
