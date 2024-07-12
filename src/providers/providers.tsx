'use client';
import { Category } from '@/enums/category';
import React, { FC, ReactNode, useState } from 'react';
import CategoryContext from './categoryProvider/categoryProvider';

interface Props {
  children: ReactNode;
}
const Providers: FC<Props> = ({ children }) => {
  const [category, setCategory] = useState(Category.ALL);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default Providers;
