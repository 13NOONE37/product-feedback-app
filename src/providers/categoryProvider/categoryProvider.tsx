import { Category } from '@/enums/category';
import { createContext, Dispatch, SetStateAction } from 'react';

const CategoryContext = createContext<{
  category: Category;
  setCategory: Dispatch<SetStateAction<Category>>;
}>({
  category: Category.ALL,
  setCategory: () => {},
});
export default CategoryContext;
