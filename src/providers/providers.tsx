'use client';
import { Category } from '@/enums/category';
import React, { FC, ReactNode, useState } from 'react';
import CategoryContext from './categoryProvider/categoryProvider';
import SortContext, { SORT } from './sortProvider/sortProvider';
import { DropdownOption } from '@/types/dropdownOption';

interface Props {
  children: ReactNode;
}
const Providers: FC<Props> = ({ children }) => {
  const [category, setCategory] = useState(Category.ALL);
  const [sortBy, setSortBy] = useState<DropdownOption>(
    SORT.OPTIONS.UPVOTES_DESC,
  );

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      <SortContext.Provider value={{ sortBy, setSortBy }}>
        {children}
      </SortContext.Provider>
    </CategoryContext.Provider>
  );
};

export default Providers;
